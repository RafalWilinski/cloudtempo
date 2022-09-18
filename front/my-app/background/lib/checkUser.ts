import { get } from "js-cookie";
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
  } catch (error) {
    console.log(error);
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

    if (response.ok) {
      return checkLicenseKey(response.ok);
    }

    if (response.n && response.c) {
      return checkTrialDatesAndValidity(response.n, response.c);
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

function checkLicenseKey(encryptedLicenseKey: string) {
  const decryptedReceivedKey = AES.decrypt(
    encryptedLicenseKey,
    SECRET_CONST
  ).toString(enc.Utf8);
  const storedLicenseKey = get("cloudtempo-licensekey");
  const areKeysMatching = decryptedReceivedKey === storedLicenseKey;

  if (areKeysMatching) {
    return {
      isValid: decryptedReceivedKey === storedLicenseKey,
      licenseKey: decryptedReceivedKey,
    };
  }

  return {
    isValid: false,
    reason: "There's mismatch between stored and received license keys",
  };
}

function checkTrialDatesAndValidity(
  encryptedAccountId: string,
  encryptedCreatedAt: string
) {
  const decryptedAccountId = AES.decrypt(
    encryptedAccountId,
    SECRET_CONST
  ).toString(enc.Utf8);

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
