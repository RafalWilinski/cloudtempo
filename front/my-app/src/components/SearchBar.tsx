/* eslint-disable @next/next/no-img-element */
// <reference types="chrome"/>
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { Command } from "cmdk";
import * as lambda from "./services/Lambda";
import * as cloudformation from "./services/Cloudformation";
import { Document } from "../document";
import { RegionsMenu } from "./menus/RegionsMenu";
import { ActionsMenu } from "./menus/ActionsMenu";
import { ConfigurationMenu } from "./menus/ConfigurationMenu";
import { extensionId } from "../lib/extension";
import { ServicesMenu } from "./menus/ServicesMenu";
import { getCurrentAccountId } from "../lib/getCurrentAccountId";
import { demoResources } from "../lib/demoResources";
import { ActivateMenu } from "./menus/ActivateMenu";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { SubCommand } from "./SubCommand";
import { consoleUrl } from "./services/url";
import { ResourcesMenu } from "./menus/ResourcesMenu";

export function CloudTempo({ isDemo }: { isDemo?: boolean }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisibility] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isActionsMenuVisible, setActionsMenuVisibility] = useState(false);
  const listRef = React.useRef(null);
  const currentAccountId = getCurrentAccountId();
  const [pages, setPages] = React.useState<string[]>(["Home"]);
  const [selectedDocument, setSelectedDocument] = useState<
    Document | undefined
  >();
  const [preselectedDocument, setPreSelectedDocument] = useState<
    Document | undefined
  >();
  const activePage = pages[pages.length - 1];
  const isHome = activePage === "Home";

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  const _onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Backspace") {
        if (isHome || inputValue.length) {
          return;
        }

        popPage();
      }

      if (e.metaKey && e.code === "KeyK") {
        setVisibility((v) => !v);
      }
    },
    [inputValue.length, popPage, isHome]
  );

  useEffect(() => {
    document.addEventListener("keydown", _onKeyDown);
    return () => {
      document.removeEventListener("keydown", _onKeyDown);
    };
  }, [_onKeyDown]);

  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Document[]>([] as Document[]);

  const debouncedGetItems = useDebouncedCallback(async () => {
    if (inputValue === "" || !inputValue) {
      setLoading(false);
      setItems([]);
      return;
    }

    setLoading(true);

    if (window.location.href.indexOf("localhost") < 0 && !isDemo) {
      chrome.runtime.sendMessage(
        extensionId,
        { q: inputValue, accountId: currentAccountId },
        function (response) {
          console.log(response);

          setItems(response);
          setLoading(false);
        }
      );
    } else {
      setItems(demoResources);
      setLoading(false);
    }
  }, 100);

  useEffect(() => {
    setActionsMenuVisibility(value.indexOf("resource") > 0);

    if (value.indexOf("resource") > 0) {
      const [name, region, awsService] = value.split(" ");
      const resource = items.find(
        (item) =>
          item.name === name &&
          item.region === region &&
          item.awsService === awsService
      );

      if (resource) {
        setPreSelectedDocument(resource);
      }
    }
  }, [value, items]);

  React.useEffect(() => {
    if (activePage === "Home") {
      debouncedGetItems();
    }
  }, [inputValue, activePage, debouncedGetItems]);

  const onSelect = (item: Document) => {
    switch (item.awsService) {
      case "lambda": {
        setSelectedDocument(item);
        setPages([...pages, "lambda"]);
        setInputValue("");
        break;
      }
      case "cloudformation": {
        setSelectedDocument(item);
        setPages([...pages, "CloudFormation"]);
        setInputValue("");
      }
      default: {
        consoleUrl(item);
      }
    }
  };

  const renderMainInputPlaceholder = () => {
    if (isDemo) {
      return `Type "DynamoDB", "s3", "graphql" or something else...`;
    }

    if (activePage === "License") {
      return "Paste your license key here";
    }

    return "Start typing to search...";
  };

  return (
    <div
      className={`bg ${isVisible ? "cmdk-not-visible" : "cmdk-visible"}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.target === e.currentTarget) {
          setVisibility(false);
        }
      }}
    >
      {isVisible && (
        <div className={`cloudtempo ${isDarkMode ? "dark" : ""}`}>
          <Command
            value={value}
            onValueChange={(value) => {
              setValue(value);
            }}
            ref={ref}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                // bounce();
              }

              if (e.key === "Escape") {
                setVisibility(false);
              }
            }}
          >
            <div>
              {pages.map((p) => (
                <div key={p} cmdk-cloudtempo-badge="">
                  {p === "Home" ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setPages(["Home"])}
                    >
                      {p} (
                      {getCurrentAccountId(isDemo) ??
                        "AWS Account ID not found"}
                      )
                    </div>
                  ) : (
                    p
                  )}
                </div>
              ))}
            </div>
            {activePage !== "Configuration" && (
              <div style={{ display: "flex" }}>
                {activePage !== "Home" && (
                  <ArrowSmallLeftIcon
                    width={20}
                    height={20}
                    className="back"
                    onClick={() => popPage()}
                  />
                )}
                <Command.Input
                  ref={inputRef}
                  value={inputValue}
                  autoFocus={true}
                  placeholder={renderMainInputPlaceholder()}
                  onValueChange={(value) => {
                    setInputValue(value);
                  }}
                />
              </div>
            )}
            <Command.List ref={listRef}>
              {isHome && items.length > 0 && (
                <ResourcesMenu
                  items={items}
                  onSelect={onSelect}
                  loading={loading}
                  setPages={setPages}
                  setSelectedDocument={setSelectedDocument}
                  setInputValue={setInputValue}
                  pages={pages}
                />
              )}
              {isHome && (
                <ActionsMenu
                  setPages={setPages}
                  pages={pages}
                  isDemo={isDemo}
                />
              )}
              {isHome && <ServicesMenu isDemo={isDemo} />}
              {activePage === "lambda" && (
                <lambda.Menu document={selectedDocument!} />
              )}
              {activePage === "CloudFormation" && (
                <cloudformation.Menu document={selectedDocument!} />
              )}
              {activePage === "Regions" && <RegionsMenu />}
              {activePage === "License" && <ActivateMenu />}
              {activePage === "Configuration" && (
                <ConfigurationMenu
                  goToHome={() => setPages(["Home"])}
                  setDarkMode={() =>
                    setDarkMode((d) => {
                      Cookies.set("cloudtempo-dark-mode", (!d).toString());
                      return !d;
                    })
                  }
                />
              )}
            </Command.List>
            {isHome && isActionsMenuVisible && (
              <SubCommand
                inputRef={inputRef}
                listRef={listRef}
                doc={preselectedDocument!}
              />
            )}
          </Command>
        </div>
      )}
      <Toaster />
    </div>
  );
}
