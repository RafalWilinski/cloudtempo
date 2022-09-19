/* eslint-disable react/no-unescaped-entities */
import { Command } from "cmdk";
import { CreditCardIcon } from "@heroicons/react/24/outline";

interface ActivateMenuProps {
  isDemo?: boolean;
  isActivated?: boolean;
  setPages: (pages: string[]) => void;
}

export function ActivateMenu({
  isDemo,
  isActivated,
  setPages,
}: ActivateMenuProps) {
  return (
    <Command.Group heading="Actions">
      <Command.Item
        onSelect={() => (location.href = "https://cloudtempo.dev/buy?ref=app")}
      >
        <CreditCardIcon width={20} height={20} />
        If you don't have license yet - Buy here
      </Command.Item>
    </Command.Group>
  );
}
