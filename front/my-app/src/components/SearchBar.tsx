/// <reference types="chrome"/>
import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import * as lambda from "./Lambda";
import * as s3 from "./S3";
import * as dynamodb from "./DynamoDB";
import * as cloudformation from "./Cloudformation";
import { Document } from "../document";
import {
  ArrowPathIcon,
  LifebuoyIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const serviceIconMap: Record<string, any> = {
  lambda: lambda.icon,
  s3: s3.icon,
  dynamodb: dynamodb.icon,
  cloudformation: cloudformation.icon,
};

const serviceResourceNameMap: Record<string, string> = {
  lambda: "Lambda Function",
  s3: "S3 Bucket",
  dynamodb: "DynamoDB Table",
  cloudformation: "CloudFormation Stack",
};

export function VercelCMDK() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisibility] = useState(false);
  const [inputValue, setInputValue] = React.useState("");

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
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function getItems() {
      setLoading(true);

      if (window.location.href.indexOf("localhost") < 0) {
        chrome.runtime.sendMessage(
          "dfdbbkddkbcggkpdkgnogjhpijiahcep",
          { q: inputValue },
          function (response) {
            console.log(response);

            setItems(response.results);
            setLoading(false);
          }
        );
      } else {
        const res = await fetch(
          `https://qrda6vijsce767dglefttcrrcy0uldfr.lambda-url.us-east-1.on.aws/?q=${inputValue}`
        );
        const json = await res.json();
        setItems(json.results);
        setLoading(false);
      }
    }

    if (inputValue && inputValue.length > 1 && activePage === "Home") {
      getItems();
    }
  }, [inputValue]);

  return (
    <div className={`bg ${isVisible ? "cmdk-not-visible" : "cmdk-visible"}`}>
      <div className="vercel">
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
                {p}
              </div>
            ))}
          </div>
          <Command.Input
            value={inputValue}
            autoFocus={true}
            placeholder="Start typing to search..."
            onValueChange={(value) => {
              setInputValue(value);
            }}
          />
          {isHome && (
            <ResourcesMenu
              items={items}
              loading={loading}
              setPages={setPages}
              setSelectedDocument={setSelectedDocument}
              setInputValue={setInputValue}
              pages={pages}
            />
          )}
          {activePage === "lambda" && (
            <lambda.Menu document={selectedDocument!} />
          )}
        </Command>
      </div>
    </div>
  );
}

interface ResourcesMenuProps {
  loading: boolean;
  items: any[];
  pages: string[];
  setPages: (pages: string[]) => void;
  setInputValue: (value: string) => void;
  setSelectedDocument: (document: Document) => void;
}

function ResourcesMenu({
  items,
  loading,
  setPages,
  setSelectedDocument,
  setInputValue,
  pages,
}: ResourcesMenuProps) {
  return (
    <>
      <Command.Group heading="Resources">
        <Command.List>
          {!loading && items.length === 0 && (
            <Command.Empty>No results found.</Command.Empty>
          )}
          {loading && (
            <div className="aws-search-loading">Fetching resources...</div>
          )}
          {items.map((item) => {
            return (
              <Command.Item
                style={{
                  justifyContent: "space-between",
                }}
                key={(item as any).name}
                value={(item as any).name!}
                onSelect={() => {
                  setSelectedDocument(item);
                  setPages([...pages, "lambda"]);
                  setInputValue("");
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
      <Command.Group heading="Actions">
        <Command.Item>
          <ArrowPathIcon width={20} height={20} />
          Reindex search
        </Command.Item>
        <Command.Item>
          <CheckBadgeIcon width={20} height={20} />
          Activate (6 days of trial left)
        </Command.Item>
        <Command.Item>
          <LifebuoyIcon width={20} height={20} />
          Help
        </Command.Item>
      </Command.Group>
    </>
  );
}
