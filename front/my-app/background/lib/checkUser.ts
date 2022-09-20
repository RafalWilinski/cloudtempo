import { AES, enc } from "crypto-js";
import { SECRET_CONST } from "./reindex";

export interface AWSInfo {
  arn: string;
  alias: string;
  username: string;
  keybase: string;
  issuer: string;
  signinType: string;
}

export interface LicenseInfo {
  licenseKey?: string;
  timeRemaining?: string;
  isValid: boolean;
  reason?: string;
}

export async function registerLicenseKey(licenseKey: string, userInfo?: any) {
  if (!userInfo) {
    return { isValid: false, reason: "AWS User Info missing" };
  }

  const user: AWSInfo = JSON.parse(userInfo);
  const encryptedArn = AES.encrypt(user.arn, SECRET_CONST).toString();

  try {
    const response = await (
      await fetch(
        `https://api.cloudtempo.dev/user/activate?id=${encodeURIComponent(
          encryptedArn
        )}&licenseKey=${encodeURIComponent(licenseKey)}`
      )
    ).json();

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
    return { error: (error as any).message };
  }
}

export async function checkUser(userInfo?: any): Promise<LicenseInfo> {
  if (!userInfo) {
    return { isValid: false, reason: "AWS User Info missing" };
  }

  const user: AWSInfo = JSON.parse(userInfo);
  const encryptedArn = AES.encrypt(user.arn, SECRET_CONST).toString();

  try {
    const response = await (
      await fetch(
        `https://api.cloudtempo.dev/user?id=${encodeURIComponent(encryptedArn)}`
      )
    ).json();

    if (response.n && response.c) {
      return checkTrialDatesAndValidity(response.n, response.c);
    }

    if (response.ok) {
      const decryptedReceivedKey = AES.decrypt(
        response.ok,
        SECRET_CONST
      ).toString(enc.Utf8);

      return {
        isValid: true,
        licenseKey: decryptedReceivedKey,
      };
    }

    return {
      isValid: false,
      reason: "Unknown response from server",
    };
  } catch (error) {
    console.error("Error while checking user", error);

    return {
      isValid: false,
      reason: `Error while checking user: ${(error as any).message}`,
    };
  }
}

function checkTrialDatesAndValidity(
  encryptedAccountId: string,
  encryptedCreatedAt: string
) {
  const decryptedCreatedAt = AES.decrypt(
    encryptedCreatedAt,
    SECRET_CONST
  ).toString(enc.Utf8);

  try {
    const TRIAL_DAYS = 7;
    const createdAt = new Date(decryptedCreatedAt);
    const now = new Date();
    const timeRemaining =
      createdAt.getTime() + 1000 * 60 * 60 * 24 * TRIAL_DAYS - now.getTime();

    return {
      isValid: timeRemaining > 0,
      timeRemaining: timeRemaining.toString(),
    };
  } catch (error) {
    console.error("Error while parsing date", error);

    return {
      isValid: false,
      reason: "Error while parsing date",
    };
  }
}
