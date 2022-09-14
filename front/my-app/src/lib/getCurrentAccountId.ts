import { get } from "js-cookie";
import { toast } from "react-hot-toast";

export function getCurrentAccountId(isDemo?: boolean) {
  if (isDemo) {
    return "demo-account-id";
  }

  const userInfo = get("aws-userInfo");

  if (!userInfo) {
    toast.error("No AWS user info found");
    return;
  }

  try {
    const parsedUserInfo = JSON.parse(userInfo);
    const arn = parsedUserInfo["arn"];

    if (!arn) {
      toast.error("ARN in the user info not found");
      return;
    }

    const accountId = arn.split(":")[4];

    if (!accountId) {
      toast.error("Account ID in the user info not found");
      return;
    }

    return accountId;
  } catch (error) {
    console.error(error);
    toast.error("Failed to parse AWS user info");
  }
}
