import { get, set } from "js-cookie";
import { getCurrentAccountId } from "./getCurrentAccountId";

export interface Credentials {
  accessKeyId: string;
  secretAccessKey: string;
}

export function getCredentials(accountId: string): Credentials | undefined {
  const credentials = get(`aws-account-${accountId}`);
  if (credentials) {
    return JSON.parse(credentials) as Credentials;
  }
}

export function getCurrentAccountCredentials(): Credentials | undefined {
  const currentAccountId = getCurrentAccountId();

  if (currentAccountId) {
    const credentials = getCredentials(currentAccountId);
    return credentials;
  }
}

export function saveCurrentAccountCredentials(credentials: Credentials): void {
  const currentAccountId = getCurrentAccountId();

  if (currentAccountId) {
    set(`aws-account-${currentAccountId}`, JSON.stringify(credentials));
  }
}
