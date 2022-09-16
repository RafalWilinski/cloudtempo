import { Command } from "cmdk";
import { useState } from "react";
import {
  MoonIcon,
  ServerStackIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

import { toast } from "react-hot-toast";

interface Props {
  goToHome: () => void;
  setDarkMode: () => void;
}

export function ConfigurationMenu({ goToHome, setDarkMode }: Props) {
  return (
    <Command.Group heading="Config">
      <Command.Item onSelect={() => {}}>
        <ServerStackIcon width={20} height={20} />
        Selected Services
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
