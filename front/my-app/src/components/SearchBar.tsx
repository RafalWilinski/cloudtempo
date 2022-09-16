/* eslint-disable @next/next/no-img-element */
// <reference types="chrome"/>
import React, { createRef, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Toaster } from "react-hot-toast";
import { set } from "js-cookie";
import { Command } from "cmdk";
import * as lambda from "./services/Lambda";
import * as s3 from "./services/S3";
import * as dynamodb from "./services/DynamoDB";
import * as cloudformation from "./services/Cloudformation";
import * as cloudwatchlogs from "./services/CloudwatchLogs";
import { Document } from "../document";
import { RegionsMenu } from "./menus/RegionsMenu";
import { ActionsMenu } from "./menus/ActionsMenu";
import { ConfigurationMenu } from "./menus/ConfigurationMenu";
import { extensionId } from "../lib/extension";
import { ServicesMenu } from "./menus/ServicesMenu";
import { getCurrentAccountId } from "../lib/getCurrentAccountId";
import { demoResources } from "../lib/demoResources";
import { ActivateMenu } from "./menus/ActivateMenu";

const serviceIconMap: Record<string, any> = {
  lambda: lambda.icon,
  s3: s3.icon,
  dynamodb: dynamodb.icon,
  cloudformation: cloudformation.icon,
  logs: cloudwatchlogs.icon,
};

const serviceResourceNameMap: Record<string, string> = {
  lambda: "Lambda Function",
  s3: "S3 Bucket",
  dynamodb: "DynamoDB Table",
  cloudformation: "CloudFormation Stack",
  logs: "CloudWatch Log Group",
};

export function VercelCMDK({ isDemo }: { isDemo?: boolean }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisibility] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = createRef();

  const [pages, setPages] = React.useState<string[]>(["Home"]);
  const [selectedDocument, setSelectedDocument] = useState<
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
    [inputValue.length, popPage]
  );

  useEffect(() => {
    document.addEventListener("keydown", _onKeyDown);
    return () => {
      document.removeEventListener("keydown", _onKeyDown);
    };
  }, [_onKeyDown]);

  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Document[]>([] as Document[]);

  const debouncedGetItems = useDebouncedCallback(
    async () => {
      if (inputValue === "" || !inputValue) {
        setLoading(false);
        setItems([]);
        return;
      }

      setLoading(true);

      if (window.location.href.indexOf("localhost") < 0 && !isDemo) {
        chrome.runtime.sendMessage(
          extensionId,
          { q: inputValue },
          function (response) {
            console.log(response);

            setItems(response);
            setLoading(false);
          }
        );
      } else {
        // const res = await fetch(
        //   `https://qrda6vijsce767dglefttcrrcy0uldfr.lambda-url.us-east-1.on.aws/?q=${inputValue}`
        // );
        // const json = await res.json();
        setItems(demoResources);
        setLoading(false);
      }
    },

    100
  );

  React.useEffect(() => {
    if (activePage === "Home") {
      debouncedGetItems();
    }
  }, [inputValue, activePage, debouncedGetItems]);

  return (
    <div
      className={`bg ${isVisible ? "cmdk-not-visible" : "cmdk-visible"}`}
      onClick={() => setVisibility(false)}
    >
      {isVisible && (
        <div className={`vercel ${isDarkMode ? "dark" : ""}`}>
          <Command
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
                <div key={p} cmdk-vercel-badge="">
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
              <Command.Input
                ref={inputRef as any}
                value={inputValue}
                autoFocus={true}
                placeholder={
                  isDemo
                    ? `Type "DynamoDB", "s3", "graphql" or something else...`
                    : "Start typing to search..."
                }
                onValueChange={(value) => {
                  setInputValue(value);
                }}
              />
            )}
            {isHome && (
              <ResourcesMenu
                isDemo={isDemo}
                items={items}
                loading={loading}
                setPages={setPages}
                setSelectedDocument={setSelectedDocument}
                setInputValue={setInputValue}
                pages={pages}
              />
            )}
            {isHome && <ServicesMenu isDemo={isDemo} />}
            {activePage === "lambda" && (
              <lambda.Menu document={selectedDocument!} />
            )}
            {activePage === "cloudformation" && (
              <cloudformation.Menu document={selectedDocument!} />
            )}
            {activePage === "Regions" && <RegionsMenu />}
            {activePage === "License" && <ActivateMenu />}
            {activePage === "Configuration" && (
              <ConfigurationMenu
                goToHome={() => setPages(["Home"])}
                setDarkMode={() =>
                  setDarkMode((d) => {
                    set("cloudtempo-dark-mode", (!d).toString());
                    return !d;
                  })
                }
              />
            )}
          </Command>
        </div>
      )}
      <Toaster />
    </div>
  );
}

interface ResourcesMenuProps {
  isDemo?: boolean;
  loading: boolean;
  items: any[];
  pages: string[];
  setPages: (pages: string[]) => void;
  setInputValue: (value: string) => void;
  setSelectedDocument: (document: Document) => void;
}

function ResourcesMenu({
  isDemo,
  items,
  loading,
  setPages,
  setSelectedDocument,
  setInputValue,
  pages,
}: ResourcesMenuProps) {
  const onSelect = (item: Document) => {
    switch (item.awsService) {
      case "lambda": {
        setSelectedDocument(item);
        setPages([...pages, "lambda"]);
        setInputValue("");
        break;
      }
      case "s3": {
        location.href = s3.url(item.name!, item.region);
        break;
      }
      case "dynamodb": {
        location.href = dynamodb.url(item.name!, item.region);
        break;
      }
      case "cloudformation": {
        location.href = cloudformation.url(item.name!, item.region, "0", "0"); // todo
        break;
      }
      case "logs": {
        location.href = cloudwatchlogs.url(item.name!, item.region);
        break;
      }
    }
  };

  return (
    <>
      <Command.Group
        heading={`Resources${
          items && items.length > 0 ? ` (${items.length} found)` : ""
        }`}
      >
        <Command.List>
          {!loading && (items ?? []).length === 0 && (
            <Command.Empty>No results found.</Command.Empty>
          )}
          {loading && (
            <div className="aws-search-loading">Fetching resources...</div>
          )}
          {(items ?? []).map((item) => {
            return (
              <Command.Item
                style={{
                  justifyContent: "space-between",
                }}
                key={(item as any).arn}
                value={`${(item as any).name!} ${(item as any).region} ${
                  (item as any).awsService
                }}`}
                onSelect={() => {
                  onSelect(item);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="service icon"
                    src={serviceIconMap[(item as any).awsService]}
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <div style={{ marginLeft: "8px" }}>
                    <span>{(item as any).name} </span>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        fontSize: "10px",
                      }}
                    >
                      {serviceResourceNameMap[(item as any).awsService]}
                    </p>
                  </div>
                </div>
                <span>{(item as any).region}</span>
              </Command.Item>
            );
          })}
        </Command.List>
      </Command.Group>
      <ActionsMenu setPages={setPages} pages={pages} isDemo={isDemo} />
    </>
  );
}
