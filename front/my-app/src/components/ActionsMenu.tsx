import { Command } from "cmdk";
import {
  ArrowPathIcon,
  LifebuoyIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { getCurrentAccountCredentials } from "../lib/getCredentials";
import { extensionId } from "../lib/extension";
import { toast } from "react-hot-toast";

interface ActionsMenuProps {
  setPages: (pages: string[]) => void;
  pages: string[];
}

export function ActionsMenu({ pages, setPages }: ActionsMenuProps) {
  const [isReindexing, setIsReindexing] = useState(false);

  const credentials = getCurrentAccountCredentials();

  return (
    <Command.Group heading="Actions">
      <Command.Item onSelect={() => setPages([...pages, "Regions"])}>
        <GlobeEuropeAfricaIcon width={20} height={20} />
        Switch Region
      </Command.Item>
      <Command.Item onSelect={() => setPages([...pages, "Configuration"])}>
        <Cog6ToothIcon width={20} height={20} />
        Configuration
      </Command.Item>
      <Command.Item
        disabled={isReindexing || !credentials}
        onSelect={() => {
          if (!credentials) {
            console.log("Please set your credentials first");
          }

          if (!isReindexing) {
            chrome.runtime.sendMessage(
              extensionId,
              {
                type: "reindex",
                ...credentials,
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
      <Command.Item>
        <CheckBadgeIcon width={20} height={20} />
        Activate (6 days of trial left)
      </Command.Item>
      <Command.Item>
        <LifebuoyIcon width={20} height={20} />
        Help
      </Command.Item>
    </Command.Group>
  );
}
