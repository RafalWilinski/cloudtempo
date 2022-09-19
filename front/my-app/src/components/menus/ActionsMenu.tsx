import { Command } from "cmdk";
import Cookies from "js-cookie";
import {
  ArrowPathIcon,
  InformationCircleIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  UserIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { extensionId } from "../../lib/extension";
import { toast } from "react-hot-toast";
import { getCurrentAccountId } from "../../lib/getCurrentAccountId";
import { LicenseInfo } from "../../../background/lib/checkUser";
import { getCurrentlySelectedRegions } from "./SelectedRegionsMenu";
import { getCurrentlySelectedServices } from "./SelectedServicesMenu";

interface ActionsMenuProps {
  setPages: (pages: string[]) => void;
  pages: string[];
  isDemo?: boolean;
  userInfo?: LicenseInfo;
}

export function ActionsMenu({ pages, setPages, isDemo }: ActionsMenuProps) {
  const [isReindexing, setIsReindexing] = useState(false);

  useEffect(() => {
    // chrome.runtime.onMessage.addListener(console.log);
    // chrome.extension.onMessage.addListener(console.log);
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
                userInfo: Cookies.get("aws-userInfo"),
                accountId: getCurrentAccountId(isDemo),
                selectedRegions: getCurrentlySelectedRegions(),
                selectedServices: getCurrentlySelectedServices(),
              },
              function (_response) {
                console.log(_response);
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
        onSelect={() => {
          if (isDemo) {
            location.href =
              "https://github.com/orgs/cloud-tempo/projects/1/views/1";
          }

          chrome.runtime.sendMessage(extensionId, {
            openUrl: "https://github.com/orgs/cloud-tempo/projects/1/views/1",
          });
        }}
      >
        <MapIcon width={20} height={20} />
        Roadmap
      </Command.Item>
      <Command.Item
        onSelect={() => {
          if (isDemo) {
            location.href = "https://cloudtempo.dev/faq";
          }

          chrome.runtime.sendMessage(extensionId, {
            openUrl: "https://cloudtempo.dev/faq",
          });
        }}
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
