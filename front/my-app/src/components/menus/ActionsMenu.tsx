import { Command } from "cmdk";
import {
  ArrowPathIcon,
  InformationCircleIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  UserIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { extensionId } from "../../lib/extension";
import { toast } from "react-hot-toast";

interface ActionsMenuProps {
  setPages: (pages: string[]) => void;
  pages: string[];
  isDemo?: boolean;
}

export function ActionsMenu({ pages, setPages, isDemo }: ActionsMenuProps) {
  const [isReindexing, setIsReindexing] = useState(false);

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
        disabled={isReindexing || isDemo}
        onSelect={() => {
          if (isDemo) {
            toast.error("This is just a demo, chill out.");
            return;
          }

          if (!isReindexing) {
            chrome.runtime.sendMessage(
              extensionId,
              {
                type: "reindex",
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
      </Command.Item>
      {!isDemo && (
        <Command.Item onSelect={() => setPages(["Home", "License"])}>
          <CheckBadgeIcon width={20} height={20} />
          Activate (6 days of trial left)
        </Command.Item>
      )}

      <Command.Item
        onSelect={() => (location.href = "https://cloudtempo.dev/faq")}
      >
        <InformationCircleIcon width={20} height={20} />
        FAQ
      </Command.Item>
      <Command.Item onSelect={() => {}}>
        <ChatBubbleBottomCenterTextIcon width={20} height={20} />
        Drop us a line / send feedback
      </Command.Item>
    </Command.Group>
  );
}
