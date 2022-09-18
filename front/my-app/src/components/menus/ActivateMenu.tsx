import { Command } from "cmdk";
import { KeyIcon, CreditCardIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";

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
        Buy License
      </Command.Item>
      {!isActivated && (
        <Command.Item
          onSelect={() => {
            setPages(["Home", "Activate"]);
          }}
        >
          <KeyIcon width={20} height={20} />
          Activate License using Key
        </Command.Item>
      )}
    </Command.Group>
  );
}
