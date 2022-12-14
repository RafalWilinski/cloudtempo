/* eslint-disable @next/next/no-img-element */
// <reference types="chrome"/>
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Cookies from "js-cookie";
import { Command } from "cmdk";
import confetti from "canvas-confetti";
import { ToastContainer, toast } from "react-toastify";
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
import { SelectedServicesMenu } from "./menus/SelectedServicesMenu";
import { SelectedRegionsMenu } from "./menus/SelectedRegionsMenu";
import { OnboardingMenu } from "./menus/OnboardingMenu";
import { FeedbackMenu } from "./menus/FeedbackMenu";
import { cmdOrCtrl } from "../lib/cmdOrCtrl";
import { useLicenseInfo } from "../lib/useLicenseInfo";
import { NewVersionBanner } from "./NewVersionBanner";
import { FavouritesMenu } from "./menus/FavouritesMenu";

export function CloudTempo({
  isDemo,
  demoInput,
}: {
  demoInput?: string;
  isDemo?: boolean;
}) {
  if (!Cookies.get("cloudtempo-dark-mode")) {
    Cookies.set("cloudtempo-dark-mode", "true");
  }

  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisibility] = useState(isDemo);
  const [isDarkMode, setDarkMode] = useState(
    Cookies.get("cloudtempo-dark-mode") === "true" || isDemo
  );
  const [_inputValue, setInputValue] = React.useState(demoInput ?? "");
  const [value, setValue] = React.useState("");
  const {
    userInfo,
    setUserInfo,
    getTimeRemainingFormatted,
    canUseSoftware,
    isActivated,
    refresh,
  } = useLicenseInfo(isDemo);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isActionsMenuVisible, setActionsMenuVisibility] = useState(false);
  const listRef = React.useRef(null);
  const currentAccountId = getCurrentAccountId(isDemo);
  const [pages, _setPages] = React.useState<string[]>(["Home"]);
  const [selectedDocument, setSelectedDocument] = useState<
    Document | undefined
  >();
  const [preselectedDocument, setPreSelectedDocument] = useState<
    Document | undefined
  >();
  const activePage = pages[pages.length - 1];
  const isHome = activePage === "Home";
  const inputValue = demoInput || _inputValue;

  const popPage = React.useCallback(() => {
    _setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  useEffect(() => {
    const broadcast = new BroadcastChannel("open-channel");

    broadcast.onmessage = (event) => {
      setVisibility(true);
    };

    if (!(Cookies.get("cloudtempo-initial-notification") || isDemo)) {
      Cookies.set("cloudtempo-initial-notification", "true");
      toast.success(
        `CloudTempo installed! Press ${cmdOrCtrl()} + K or M to start.`
      );
    }
  }, [isDemo]);

  const setPages = (pages: string[]) => {
    _setPages(pages);
    setValue("");
    setInputValue("");
  };

  const _onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Backspace") {
        if (isHome || inputValue.length) {
          return;
        }

        if (activePage === "Feedback") {
          return;
        }

        popPage();
      }

      if (
        (e.metaKey && e.code === "KeyK") ||
        (e.ctrlKey && e.code === "KeyK") ||
        (e.ctrlKey && e.code === "KeyM")
      ) {
        setVisibility((v) => {
          if (v) {
            document.body.classList.remove("body-cloudtempo-opened");
          } else {
            document.body.classList.add("body-cloudtempo-opened");
          }

          return !v;
        });
      }
    },
    [inputValue.length, popPage, isHome, activePage]
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
        extensionId(),
        {
          q: inputValue,
          accountId: currentAccountId,
          userInfo: Cookies.get("aws-userInfo"),
        },
        function (response) {
          console.log(response);

          if (response.userInfo) {
            setUserInfo(response.userInfo);
          }
          setItems(response.results);
          setLoading(false);
        }
      );
    } else {
      setItems(demoResources);
      setLoading(false);
    }
  }, 100);

  useEffect(() => {
    if (value.indexOf("resource") > 0) {
      const [, name, region, awsService] = value.split(" ");

      const resource = items.find(
        (item) =>
          item.name?.toLowerCase() === name &&
          item.region === region &&
          item.awsService === awsService
      );

      setActionsMenuVisibility(!!resource);

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
        setPages([...pages, "Lambda"]);
        setInputValue("");
        break;
      }
      case "cloudformation": {
        setSelectedDocument(item);
        setPages([...pages, "CloudFormation"]);
        setInputValue("");
        break;
      }
      default: {
        location.href = consoleUrl(item, getCurrentAccountId());
      }
    }
  };

  const renderMainInputPlaceholder = () => {
    if (isDemo) {
      return `Type "DynamoDB", "s3", "graphql" or something else...`;
    }

    if (activePage === "License" || !canUseSoftware()) {
      return "Paste your license key here";
    }

    return "Start typing to search...";
  };

  const submitLicenseKey = () => {
    chrome.runtime.sendMessage(
      extensionId(),
      {
        licenseKey: inputValue,
        userInfo: Cookies.get("aws-userInfo"),
      },
      function (response) {
        if (response.ok) {
          setPages(["Home"]);
          setInputValue("");
          refresh();

          confetti({
            particleCount: 100,
            spread: 90,
            origin: { y: 0.6 },
            zIndex: 99999,
          });
        } else {
          toast.error("Problem with activating a license...", {
            hideProgressBar: false,
          });
        }
      }
    );
  };

  return (
    <>
      <div
        className={`${isDemo ? "" : "bg"} ${
          isVisible ? "cmdk-not-visible" : "cmdk-visible"
        }`}
        onClick={(e) => {
          if (isDemo) {
            return;
          }

          e.preventDefault();
          e.stopPropagation();

          if (e.target === e.currentTarget) {
            document.body.classList.remove("body-cloudtempo-opened");
            setVisibility(false);
          }
        }}
      >
        {isVisible && (
          <div
            className={`cloudtempo ${isDarkMode ? "dark" : ""}`}
            id="cloudtempo"
          >
            <NewVersionBanner />
            <Command
              filter={(value, search) => {
                if (
                  value.startsWith("result") &&
                  !isDemo &&
                  location.hostname !== "localhost"
                ) {
                  return 1;
                }

                if (value.includes(search.toLowerCase())) {
                  return 1;
                }
                return 0;
              }}
              shouldFilter={
                activePage !== "Feedback" && activePage !== "License"
              }
              value={value}
              onValueChange={(value) => {
                setValue(value);
              }}
              ref={ref}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (
                  !isDemo &&
                  preselectedDocument &&
                  e.key === "Enter" &&
                  value &&
                  (e.metaKey || e.ctrlKey)
                ) {
                  e.preventDefault();

                  const url = consoleUrl(
                    preselectedDocument,
                    getCurrentAccountId()
                  );

                  console.log({
                    consoleUrl: url,
                    value,
                  });

                  chrome.runtime.sendMessage(extensionId(), {
                    type: "openInNewTab",
                    url,
                  });
                  return;
                }

                if (
                  preselectedDocument &&
                  e.key === "c" &&
                  (e.metaKey || e.ctrlKey)
                ) {
                  e.preventDefault();

                  navigator.clipboard.writeText(preselectedDocument.arn!);
                  toast.success("ARN copied to clipboard!", {
                    hideProgressBar: false,
                  });
                }

                if (
                  e.key === "Enter" &&
                  (activePage === "License" || !canUseSoftware())
                ) {
                  submitLicenseKey();
                }

                if (e.key === "Escape") {
                  document.body.classList.remove("body-cloudtempo-opened");
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

              <div style={{ display: "flex" }}>
                {activePage !== "Home" && (
                  <ArrowSmallLeftIcon
                    width={20}
                    height={20}
                    className="back"
                    onClick={() => popPage()}
                  />
                )}
                {activePage !== "Feedback" && (
                  <Command.Input
                    id="cloudtempo-main-input"
                    ref={inputRef}
                    value={inputValue}
                    autoFocus={true}
                    placeholder={renderMainInputPlaceholder()}
                    onValueChange={(value) => {
                      setInputValue(value);
                    }}
                  />
                )}
              </div>

              {!canUseSoftware() && (
                <ActivateMenu setPages={setPages} isTrialOver={true} />
              )}
              {canUseSoftware() && (
                <Command.List ref={listRef}>
                  {isHome && items.length > 0 && (
                    <FavouritesMenu
                      items={items.filter((item) => item.isFavourite)}
                      onSelect={onSelect}
                      loading={loading}
                      setPages={setPages}
                      setSelectedDocument={setSelectedDocument}
                      setInputValue={setInputValue}
                      pages={pages}
                    />
                  )}
                  {isHome && items.length > 0 && (
                    <ResourcesMenu
                      items={items.filter(
                        (item) => item.awsService !== "service"
                      )}
                      onSelect={onSelect}
                      loading={loading}
                      setPages={setPages}
                      setSelectedDocument={setSelectedDocument}
                      setInputValue={setInputValue}
                      pages={pages}
                    />
                  )}

                  {!isDemo && isHome && <OnboardingMenu setPages={setPages} />}
                  {isHome && (
                    <ActionsMenu
                      setPages={setPages}
                      pages={pages}
                      isDemo={isDemo}
                      userInfo={userInfo}
                      getTimeRemainingFormatted={getTimeRemainingFormatted}
                      canUseSoftware={canUseSoftware}
                      isActivated={isActivated}
                    />
                  )}

                  {isHome && (
                    <ServicesMenu
                      isDemo={isDemo}
                      services={items.filter(
                        (item) => item.awsService === "service"
                      )}
                    />
                  )}
                  {activePage === "Lambda" && (
                    <lambda.Menu document={selectedDocument!} />
                  )}
                  {activePage === "Feedback" && (
                    <FeedbackMenu setPages={setPages} />
                  )}
                  {activePage === "CloudFormation" && (
                    <cloudformation.Menu document={selectedDocument!} />
                  )}
                  {activePage === "Regions" && <RegionsMenu />}
                  {activePage === "License" && (
                    <ActivateMenu setPages={setPages} />
                  )}
                  {activePage === "Configuration" && (
                    <ConfigurationMenu
                      goToHome={() => setPages(["Home"])}
                      setPages={setPages}
                      setDarkMode={() =>
                        setDarkMode((d) => {
                          Cookies.set("cloudtempo-dark-mode", (!d).toString());
                          return !d;
                        })
                      }
                    />
                  )}
                  {activePage === "Selected Services" && (
                    <SelectedServicesMenu />
                  )}
                  {activePage === "Selected Regions" && <SelectedRegionsMenu />}
                </Command.List>
              )}
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
      </div>
      <ToastContainer
        theme={isDarkMode || isDemo ? "dark" : "light"}
        className={isDarkMode || isDemo ? "dark" : ""}
      />
    </>
  );
}
