import { Command } from "cmdk";
import { KeyIcon, CreditCardIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface ActivateMenuProps {
  isDemo?: boolean;
  isActivated?: boolean;
}

export function ActivateMenu({ isDemo, isActivated }: ActivateMenuProps) {
  return (
    <Command.Group heading="Actions">
      <Command.Item
        onSelect={() => (location.href = "https://cloudtempo.dev/buy?ref=app")}
      >
        <CreditCardIcon width={20} height={20} />
        Buy License
      </Command.Item>
      <Command.Item onSelect={() => {}}>
        <KeyIcon width={20} height={20} />
        Activate License using Key
      </Command.Item>
    </Command.Group>
  );
}
