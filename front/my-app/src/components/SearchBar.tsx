/// <reference types="chrome"/>
import React, { createRef, useEffect, useState } from "react";
import { Command } from "cmdk";
import * as lambda from "./Lambda";
import * as s3 from "./S3";
import * as dynamodb from "./DynamoDB";
import * as cloudformation from "./Cloudformation";
import * as cloudwatchlogs from "./CloudwatchLogs";
import { Document } from "../document";
import {
  ArrowPathIcon,
  LifebuoyIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

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

export function VercelCMDK() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisibility] = useState(false);
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

  useEffect(() => {
    // setItems([]);
  }, [isVisible]);

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
      {isVisible && (
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
              ref={inputRef as any}
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
            {activePage === "Regions" && <RegionsMenu />}
          </Command>
        </div>
      )}
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
        <Command.Item onSelect={() => setPages([...pages, "Regions"])}>
          <GlobeEuropeAfricaIcon width={20} height={20} />
          Switch Region
        </Command.Item>
        <Command.Item>
          <Cog6ToothIcon width={20} height={20} />
          Configuration
        </Command.Item>
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

function RegionsMenu() {
  const regions = [
    { name: "US East (N. Virginia)", code: "us-east-1" },
    { name: "US East (Ohio)", code: "us-east-2" },
    { name: "US West (N. California)", code: "us-west-1" },
    { name: "US West (Oregon)", code: "us-west-2" },
    { name: "Africa (Cape Town)", code: "af-south-1" },
    { name: "Asia Pacific (Hong Kong)", code: "ap-east-1" },
    { name: "Asia Pacific (Osaka-Local)", code: "ap-northeast-3" },
    { name: "Asia Pacific (Seoul)", code: "ap-northeast-2" },
    { name: "Asia Pacific (Tokyo)", code: "ap-northeast-1" },
    { name: "Asia Pacific (Mumbai)", code: "ap-south-1" },
    { name: "Asia Pacific (Singapore)", code: "ap-southeast-1" },
    { name: "Asia Pacific (Sydney)", code: "ap-southeast-2" },
    { name: "Canada (Central)", code: "ca-central-1" },
    { name: "Europe (Frankfurt)", code: "eu-central-1" },
    { name: "Europe (Ireland)", code: "eu-west-1" },
    { name: "Europe (London)", code: "eu-west-2" },
    { name: "Europe (Milan)", code: "eu-south-1" },
    { name: "Europe (Paris)", code: "eu-west-3" },
    { name: "Europe (Stockholm)", code: "eu-north-1" },
    { name: "Middle East (Bahrain)", code: "me-south-1" },
    { name: "South America (São Paulo)", code: "sa-east-1" },
  ];

  return (
    <Command.Group heading="Regions">
      <Command.List>
        {regions.map((region) => {
          return (
            <Command.Item
              value={`${region.code} ${region.name}`}
              onSelect={() => {
                location.href = `https://${region}.console.aws.amazon.com/console/home?region=${region}`;
              }}
            >
              {region.name} - ${region.code}
            </Command.Item>
          );
        })}
      </Command.List>
    </Command.Group>
  );
}
