import { Command } from "cmdk";
import {
  ArrowPathIcon,
  LifebuoyIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  UserIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
  Credentials,
  getTemporarySessionCredentials,
} from "../lib/getCredentials";
import { extensionId } from "../lib/extension";
import { toast } from "react-hot-toast";

interface ActionsMenuProps {
  setPages: (pages: string[]) => void;
  pages: string[];
  isDemo?: boolean;
}

export function ActionsMenu({ pages, setPages, isDemo }: ActionsMenuProps) {
  const [isReindexing, setIsReindexing] = useState(false);
  const [credentials, setCredentials] = useState<Credentials>();

  useEffect(() => {
    if (isDemo) {
      return;
    }
    getTemporarySessionCredentials().then(setCredentials);
  }, []);

  return (
    <Command.Group heading="Actions">
      <Command.Item onSelect={() => setPages([...pages, "Regions"])}>
        <GlobeEuropeAfricaIcon width={20} height={20} />
        Switch Region
      </Command.Item>

      <Command.Item
        onSelect={() => {
          if (isDemo) {
            toast.error("Not available in demo.");
            return;
          }
          setPages([...pages, "Configuration"]);
        }}
      >
        <Cog6ToothIcon width={20} height={20} />
        Configuration
      </Command.Item>
      <Command.Item
        onSelect={() => {
          if (isDemo) {
            toast.error("Not available in demo.");
            return;
          }
        }}
      >
        <UserIcon width={20} height={20} />
        Create new IAM User...
      </Command.Item>
      <Command.Item
        onSelect={() => {
          location.href =
            "https://support.console.aws.amazon.com/support/home?region=us-east-1#/case/create";
        }}
      >
        <ChatBubbleBottomCenterTextIcon width={20} height={20} />
        Create Support Ticket...
      </Command.Item>

      <Command.Item
        disabled={isReindexing || !credentials || isDemo}
        onSelect={() => {
          if (!credentials) {
            console.log("Please set your credentials first");
            toast.error("Credentials not found!");
          }

          if (!(isReindexing || isDemo)) {
            chrome.runtime.sendMessage(
              extensionId,
              {
                type: "reindex",
                credentials,
              },
              function (_response) {
                setIsReindexing(false);
                toast("Reindexing done");
              }
            );

            setIsReindexing(true);
          }
        }}
      >
        <ArrowPathIcon
          width={20}
          height={20}
          className={isReindexing ? "spinning" : ""}
        />
        {isReindexing ? "Reindexing..." : "Reindex search"}
        {!(credentials || isReindexing) &&
          " (please set your credentials first)"}
      </Command.Item>
      {!isDemo && (
        <Command.Item onSelect={() => setPages(["Home", "License"])}>
          <CheckBadgeIcon width={20} height={20} />
          Activate (6 days of trial left)
        </Command.Item>
      )}
      {!isDemo && (
        <Command.Item>
          <LifebuoyIcon width={20} height={20} />
          Help
        </Command.Item>
      )}
    </Command.Group>
  );
}
