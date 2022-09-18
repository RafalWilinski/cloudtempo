import { get } from "js-cookie";
import { AES } from "crypto-js";
import { SECRET_CONST } from "./reindex";

export interface AWSInfo {
  arn: string;
  alias: string;
  username: string;
  keybase: string;
  issuer: string;
  signinType: string;
}

export async function checkUser() {
  const userInfo = get("aws-userInfo");

  if (!userInfo) {
    return;
  }

  const user: AWSInfo = JSON.parse(userInfo);
  const encryptedArn = AES.encrypt(user.arn, SECRET_CONST).toString();

  try {
    const response = await (
      await fetch(`https://api.cloudtango.dev/user?id=${encryptedArn}`)
    ).json();
  } catch (error) {
    console.error(error);
  }
}
