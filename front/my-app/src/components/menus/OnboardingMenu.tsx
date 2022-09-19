import { Command } from "cmdk";
import Cookies from "js-cookie";
import {
  ServerStackIcon,
  ArrowUturnLeftIcon,
  GlobeEuropeAfricaIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import confetti from "canvas-confetti";
import { useReindexing } from "../../lib/reindexing";

export interface Props {
  setPages: (pages: string[]) => void;
}

export function OnboardingMenu({ setPages }: Props) {
  const reindexingHook = useReindexing();

  if (Cookies.get("onboarding-completeed")) {
    return <></>;
  }

  return (
    <>
      <div style={{ color: "white", padding: "12px" }}>
        <div style={{ fontWeight: 700 }}>Welcome to CloudTempo!</div>
        <p style={{ fontSize: 12 }}>
          Select enabled regions & services. Then, run the indexing process.
        </p>
      </div>
      <Command.Group heading="Getting Started">
        <Command.Item
          onSelect={() => {
            setPages(["Home", "Selected Services"]);
          }}
        >
          <ServerStackIcon width={20} height={20} />
          Select Supported Services
        </Command.Item>
        <Command.Item
          onSelect={() => {
            setPages(["Home", "Selected Regions"]);
          }}
        >
          <GlobeEuropeAfricaIcon width={20} height={20} />
          Select Supported Regions
        </Command.Item>
        <Command.Item
          value="onboarding-reindexing"
          disabled={reindexingHook.isReindexing}
          onSelect={() => {
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
        <Command.Item
          onSelect={() => {
            setPages(["Home "]);
            if (!reindexingHook.isReindexing) {
              reindexingHook.sendReindexRequest();
            }
            confetti({
              particleCount: 100,
              spread: 90,
              origin: { y: 0.6 },
              zIndex: 99999,
            });
            Cookies.set("onboarding-completed", "1");
            setPages(["Home"]);
          }}
        >
          <ArrowUturnLeftIcon width={20} height={20} />
          Complete Onboarding
        </Command.Item>
      </Command.Group>
    </>
  );
}
