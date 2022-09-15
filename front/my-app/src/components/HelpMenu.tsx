import { Command } from "cmdk";
import {
  ChatBubbleBottomCenterTextIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
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
