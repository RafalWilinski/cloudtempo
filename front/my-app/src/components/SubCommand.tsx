import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Command } from "cmdk";
import {
  ArrowRightOnRectangleIcon,
  DocumentDuplicateIcon,
  LinkIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export function SubCommand({
  inputRef,
  listRef,
  selectedValue,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  listRef: React.RefObject<HTMLElement>;
  selectedValue?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (!open) {
        return;
      }

      if (e.key === "j" && e.metaKey) {
        e.preventDefault();
        setOpen((o) => !o);
      }

      if (e.code === "Backspace" && inputValue.length === 0) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [inputValue]);

  React.useEffect(() => {
    const el = listRef.current;

    if (!el) {
      return;
    }

    if (open) {
      el.style.overflow = "hidden";
    } else {
      el.style.overflow = "";
    }
  }, [open, listRef]);

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal={true}>
      <Popover.Trigger
        cmdk-cloudtempo-submenu-subcommand-trigger=""
        onClick={() => setOpen(true)}
        aria-expanded={open}
      >
        Actions
        <kbd>⌘</kbd>
        <kbd>J</kbd>
      </Popover.Trigger>
      {open && (
        <Popover.Content
          style={{
            zIndex: 1000,
          }}
          side="top"
          align="end"
          className="cloudtempo-submenu-submenu"
          sideOffset={16}
          alignOffset={0}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            inputRef?.current?.focus();
          }}
        >
          <Command>
            <Command.List>
              <Command.Group heading={selectedValue}>
                <SubItem shortcut="↵">
                  <PlayIcon width={20} height={20} />
                  Open
                </SubItem>
                <SubItem shortcut="⌘ ↵">
                  <ArrowRightOnRectangleIcon width={20} height={20} />
                  Open in a new tab
                </SubItem>
                <SubItem shortcut="⌘ I">
                  <DocumentDuplicateIcon width={20} height={20} />
                  Copy ARN
                </SubItem>
                <SubItem shortcut="⌘ I">
                  <LinkIcon width={20} height={20} />
                  Set alias
                </SubItem>
                <SubItem shortcut="⌘ ⇧ F">
                  <StarIcon width={20} height={20} />
                  Add to Favorites
                </SubItem>
              </Command.Group>
            </Command.List>
            <Command.Input
              placeholder="Search for actions..."
              value={inputValue}
              onValueChange={(value) => {
                setInputValue(value);
              }}
            />
          </Command>
        </Popover.Content>
      )}
    </Popover.Root>
  );
}

function SubItem({
  children,
  shortcut,
}: {
  children: React.ReactNode;
  shortcut: string;
}) {
  return (
    <Command.Item>
      {children}
      <div cmdk-cloudtempo-submenu-submenu-shortcuts="">
        {shortcut.split(" ").map((key) => {
          return <kbd key={key}>{key}</kbd>;
        })}
      </div>
    </Command.Item>
  );
}
