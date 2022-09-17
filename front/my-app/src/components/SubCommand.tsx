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
import { Document } from "../document";
import { consoleUrl } from "./services/url";

export function SubCommand({
  inputRef,
  listRef,
  selectedValue,
  doc,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  listRef: React.RefObject<HTMLElement>;
  selectedValue?: string;
  doc: Document;
}) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    function listener(e: KeyboardEvent) {
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
      <div cmdk-cloudtempo-submenu-subcommand-trigger="">
        Last indexing: 3 minutes ago
        <Popover.Trigger
          // onClick={() => setOpen(true)}
          aria-expanded={open}
        >
          Actions
          <kbd>⌘</kbd>
          <kbd>J</kbd>
        </Popover.Trigger>
      </div>
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
                <SubItem
                  shortcut="↵"
                  onSelect={() => {
                    location.href = consoleUrl(doc);
                  }}
                >
                  <PlayIcon width={20} height={20} />
                  Open
                </SubItem>
                <SubItem
                  shortcut="⌘ ↵"
                  onSelect={() => {
                    chrome.tabs.create({ url: consoleUrl(doc) });
                  }}
                >
                  <ArrowRightOnRectangleIcon width={20} height={20} />
                  Open in a new tab
                </SubItem>
                <SubItem shortcut="⌘ I" onSelect={() => {}}>
                  <DocumentDuplicateIcon width={20} height={20} />
                  Copy ARN (not ready)
                </SubItem>
                <SubItem shortcut="⌘ I" onSelect={() => {}}>
                  <LinkIcon width={20} height={20} />
                  Set alias (not ready)
                </SubItem>
                <SubItem shortcut="⌘ ⇧ F" onSelect={() => {}}>
                  <StarIcon width={20} height={20} />
                  Add to Favorites (not ready)
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
  onSelect,
}: {
  children: React.ReactNode;
  shortcut: string;
  onSelect: any;
}) {
  return (
    <Command.Item onSelect={onSelect}>
      {children}
      <div cmdk-cloudtempo-submenu-submenu-shortcuts="">
        {shortcut.split(" ").map((key) => {
          return <kbd key={key}>{key}</kbd>;
        })}
      </div>
    </Command.Item>
  );
}
