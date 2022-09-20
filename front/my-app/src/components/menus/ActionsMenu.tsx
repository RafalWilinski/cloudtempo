import { Command } from "cmdk";
import {
  ArrowPathIcon,
  InformationCircleIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  UserIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeEuropeAfricaIcon,
  HomeIcon,
  CloudIcon,
  UserCircleIcon,
  CircleStackIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { LicenseInfo } from "../../../background/lib/checkUser";
import { useReindexing } from "../../lib/reindexing";

interface ActionsMenuProps {
  setPages: (pages: string[]) => void;
  pages: string[];
  isDemo?: boolean;
  userInfo?: LicenseInfo;
  canUseSoftware(): boolean;
  isActivated(): boolean;
  getTimeRemainingFormatted(): string;
}

export function ActionsMenu({
  pages,
  setPages,
  isDemo,
  getTimeRemainingFormatted,
  isActivated,
}: ActionsMenuProps) {
  const reindexingHook = useReindexing(isDemo);

  useEffect(() => {
    // chrome.runtime.onMessage.addListener(console.log);
    // chrome.extension.onMessage.addListener(console.log);
  }, []);

  return (
    <>
      <Command.Group heading="Actions">
        <Command.Item onSelect={() => setPages([...pages, "Regions"])}>
          <GlobeEuropeAfricaIcon width={20} height={20} />
          Switch Region
        </Command.Item>

        <Command.Item
          onSelect={() => {
            if (isDemo) {
              toast.warning("Not available in demo.");
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
              toast.warning("Not available in demo.", {
                hideProgressBar: false,
              });
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
          Create AWS Support Ticket...
        </Command.Item>

        <Command.Item
          disabled={reindexingHook.isReindexing || isDemo}
          onSelect={() => {
            if (isDemo) {
              toast.warning("This is just a demo, chill out.", {
                hideProgressBar: false,
              });
              return;
            }

            if (!reindexingHook.isReindexing) {
              reindexingHook.sendReindexRequest();
            }
          }}
        >
          <ArrowPathIcon
            width={20}
            height={20}
            className={reindexingHook.isReindexing ? "spinning" : ""}
          />
          {reindexingHook.reindexItemLabel()}
        </Command.Item>
        {!(isDemo || isActivated()) && (
          <Command.Item onSelect={() => setPages(["Home", "License"])}>
            <CheckBadgeIcon width={20} height={20} />
            Activate ({getTimeRemainingFormatted()} of trial left)
          </Command.Item>
        )}
        <Command.Item
          onSelect={() => {
            setPages(["Home", "Feedback"]);
          }}
        >
          <ChatBubbleBottomCenterTextIcon width={20} height={20} />
          Drop me a line / send feedback
        </Command.Item>
      </Command.Group>
      <Command.Group heading="Useful links">
        <Command.Item
          onSelect={() => {
            location.href =
              "https://github.com/orgs/cloud-tempo/projects/1/views/1";
          }}
        >
          <MapIcon width={20} height={20} />
          CloudTempo Roadmap
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = "https://cloudtempo.dev/faq";
          }}
        >
          <InformationCircleIcon width={20} height={20} />
          CloudTempo FAQ
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = "https://cloudtempo.dev/";
          }}
        >
          <HomeIcon width={20} height={20} />
          CloudTempo Homepage
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = "https://aws.permissions.cloud";
          }}
        >
          <CloudIcon width={20} height={20} />
          Better IAM Reference
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = "https://instances.vantage.sh";
          }}
        >
          <ServerStackIcon width={20} height={20} />
          EC2 Instances Reference
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = "https://repost.aws";
          }}
        >
          <ChatBubbleBottomCenterTextIcon width={20} height={20} />
          re:Post forums
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = "https://twitter.com/_cloudtempo";
          }}
        >
          <UserCircleIcon width={20} height={20} />
          CloudTempo Twitter
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = "https://dynobase.dev";
          }}
        >
          <CircleStackIcon width={20} height={20} />
          Dynobase
        </Command.Item>
      </Command.Group>
    </>
  );
}
