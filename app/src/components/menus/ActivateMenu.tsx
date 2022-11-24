/* eslint-disable react/no-unescaped-entities */
import { Command } from "cmdk";
import { CreditCardIcon } from "@heroicons/react/24/outline";

interface ActivateMenuProps {
  isDemo?: boolean;
  isActivated?: boolean;
  setPages: (pages: string[]) => void;
  isTrialOver?: boolean;
}

export function ActivateMenu({
  isDemo,
  isActivated,
  setPages,
  isTrialOver,
}: ActivateMenuProps) {
  return (
    <>
      {isTrialOver && (
        <div className="onboarding-container">
          <div style={{ fontWeight: 700 }}>Trial is over!</div>
          <p style={{ fontSize: 12 }}>
            If you liked CloudTempo, please consider purchasing a license.
          </p>
        </div>
      )}
      <Command.Group heading="License Activation">
        <Command.Item
          onSelect={() =>
            (location.href = "https://cloudtempo.dev/buy?ref=app")
          }
        >
          <CreditCardIcon width={20} height={20} />
          If you don't have license yet - Buy here
        </Command.Item>
      </Command.Group>
    </>
  );
}
