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
import { toast } from "react-toastify";
import { useReindexing } from "../lib/reindexing";
import { extensionId } from "../lib/extension";
import { cmdOrCtrl } from "../lib/cmdOrCtrl";
import { getCurrentAccountId } from "../lib/getCurrentAccountId";

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
  const { timeSinceLastReindexString } = useReindexing();

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

  const markAsFavourite = React.useCallback(() => {
    chrome.runtime.sendMessage(
      extensionId(),
      {
        type: "markAsFavourite",
        accountId: getCurrentAccountId(),
        q: doc.arn || doc.name,
      },
      function (response) {
        // toast.success("Marked as favourite");
      }
    );
    setOpen((o) => !o);
    toast.success("Marked as favourite");
  }, [doc]);

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal={true}>
      <div cmdk-cloudtempo-submenu-subcommand-trigger="">
        Last indexing: {timeSinceLastReindexString()}
        <Popover.Trigger
          // onClick={() => setOpen(true)}
          aria-expanded={open}
        >
          Actions
          <kbd>{cmdOrCtrl()}</kbd>
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
                    location.href = consoleUrl(doc, getCurrentAccountId());
                  }}
                >
                  <PlayIcon width={20} height={20} />
                  Open
                </SubItem>
                <SubItem
                  shortcut={`${cmdOrCtrl()} ↵`}
                  onSelect={() => {
                    chrome.runtime.sendMessage(extensionId(), {
                      type: "openInNewTab",
                      url: consoleUrl(doc, getCurrentAccountId()),
                    });
                  }}
                >
                  <ArrowRightOnRectangleIcon width={20} height={20} />
                  Open in a new tab
                </SubItem>
                <SubItem
                  shortcut={`${cmdOrCtrl()} C`}
                  disabled={!doc.arn}
                  onSelect={() => {
                    if (doc.arn) {
                      toast.success("ARN copied to clipboard!", {
                        hideProgressBar: false,
                      });
                      navigator.clipboard.writeText(doc.arn);
                    }
                    setOpen(false);
                  }}
                >
                  <DocumentDuplicateIcon width={20} height={20} />
                  Copy ARN
                </SubItem>
                <SubItem
                  onSelect={() => {
                    markAsFavourite();
                  }}
                >
                  <StarIcon width={20} height={20} />
                  Add to Favorites
                </SubItem>
                <SubItem onSelect={() => {}} disabled={true}>
                  <LinkIcon width={20} height={20} />
                  Set alias (not ready)
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
  disabled,
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect: any;
  disabled?: boolean;
}) {
  return (
    <Command.Item onSelect={onSelect} disabled={disabled}>
      {children}
      {shortcut && (
        <div cmdk-cloudtempo-submenu-submenu-shortcuts="">
          {shortcut.split(" ").map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </Command.Item>
  );
}
