import { Command } from "cmdk";
import {
  MoonIcon,
  ServerStackIcon,
  ArrowUturnLeftIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

interface Props {
  goToHome: () => void;
  setDarkMode: () => void;
  setPages: (pages: string[]) => void;
}

export function ConfigurationMenu({ goToHome, setDarkMode, setPages }: Props) {
  return (
    <Command.Group heading="Config">
      <Command.Item
        onSelect={() => {
          setPages(["Home", "Configuration", "Selected Services"]);
        }}
      >
        <ServerStackIcon width={20} height={20} />
        Selected Services
      </Command.Item>
      <Command.Item
        onSelect={() => {
          setPages(["Home", "Configuration", "Selected Regions"]);
        }}
      >
        <GlobeEuropeAfricaIcon width={20} height={20} />
        Selected Regions
      </Command.Item>
      <Command.Item onSelect={() => setDarkMode()}>
        <MoonIcon width={20} height={20} />
        Toggle dark mode
      </Command.Item>
      <Command.Item onSelect={() => goToHome()}>
        <ArrowUturnLeftIcon width={20} height={20} />
        Save & Go Back
      </Command.Item>
    </Command.Group>
  );
}
