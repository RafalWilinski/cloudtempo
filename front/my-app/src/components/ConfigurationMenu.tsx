import { Command } from "cmdk";
import { useState } from "react";
import {
  Credentials,
  getCurrentAccountCredentials,
  saveCurrentAccountCredentials,
} from "../lib/getCredentials";
import { toast } from "react-hot-toast";

interface Props {
  goToHome: () => void;
  setDarkMode: () => void;
}

export function ConfigurationMenu({ goToHome, setDarkMode }: Props) {
  const initialCredentials = getCurrentAccountCredentials() ?? {
    accessKeyId: "",
    secretAccessKey: "",
  };
  const [credentials, setCredentials] =
    useState<Credentials>(initialCredentials);

  const setValue = (key: string, value: string) => {
    console.log("setValue", key, value);
    setCredentials({ ...credentials, [key]: value });
    saveCurrentAccountCredentials({ ...credentials, [key]: value });
    toast.success("Credentials saved");
  };

  return (
    <Command.Group heading="Indexer Role">
      <input
        value={credentials.accessKeyId}
        type="password"
        placeholder="Access Key Id"
        className="password-input"
        onChange={(e) => setValue("accessKeyId", e.target.value)}
      />
      <input
        value={credentials.secretAccessKey}
        type="password"
        placeholder="Secret Access Key"
        className="password-input"
        onChange={(e) => setValue("secretAccessKey", e.target.value)}
      />
      <p style={{ fontSize: "12px", color: "#6f6f6f", marginLeft: "6px" }}>
        Find or create AWS Credentials in the{" "}
        <a href="https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users">
          IAM Console
        </a>
        . Please use a role with minimally scoped permissions, preferably
        read-only{" "}
        <a href="https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users">
          Learn more
        </a>
        .
      </p>
      <Command.Item onSelect={() => setDarkMode()}>
        Toggle dark mode
      </Command.Item>
      <Command.Item onSelect={() => goToHome()}>Save & Go Back</Command.Item>
    </Command.Group>
  );
}
