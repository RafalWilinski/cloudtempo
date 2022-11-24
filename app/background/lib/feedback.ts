import { AES } from "crypto-js";
import { AWSInfo } from "./checkUser";
import { SECRET_CONST } from "./reindex";

export async function sendFeedback(feedbackRequest: any): Promise<void> {
  const user: AWSInfo = JSON.parse(feedbackRequest.userInfo);
  const encryptedArn = AES.encrypt(user.arn, SECRET_CONST).toString();

  try {
    const response = await (
      await fetch(
        `https://api.cloudtempo.dev/feedback?id=${encodeURIComponent(
          encryptedArn
        )}`,
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(feedbackRequest),
        }
      )
    ).json();

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
