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

export function CloudTempo({
  isDemo,
  demoInput,
}: {
  demoInput?: string;
  isDemo?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisibility] = useState(isDemo);
  const [isDarkMode, setDarkMode] = useState(true);
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
    if (!(Cookies.get("cloudtempo-initial-notification") || isDemo)) {
      Cookies.set("cloudtempo-initial-notification", "true");
      toast.success(`CloudTempo installed! Press ${cmdOrCtrl()} + K to start.`);
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
            setVisibility(false);
          }
        }}
      >
        {isVisible && (
          <div className={`cloudtempo ${isDarkMode ? "dark" : ""}`}>
            <Command
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
                  e.key === "Enter" &&
                  (activePage === "License" || !canUseSoftware())
                ) {
                  submitLicenseKey();
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

                  {isHome && <ServicesMenu isDemo={isDemo} />}
                  {activePage === "lambda" && (
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
      <ToastContainer />
    </>
  );
}
