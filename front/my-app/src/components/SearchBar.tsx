/// <reference types="chrome"/>
import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import LambdaIcon from "./LambdaIcon";
import S3Icon from "./S3Icon";
import DynamoDBIcon from "./DynamoDBIcon";

const serviceIconMap: Record<string, any> = {
  lambda: LambdaIcon,
  s3: S3Icon,
  dynamodb: DynamoDBIcon,
};

export function VercelCMDK() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisibility] = useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const [pages, setPages] = React.useState<string[]>(["us-east-1"]);

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  const _onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
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

    if (inputValue && inputValue.length > 1) {
      getItems();
    }
  }, [inputValue]);

  function bounce() {
    // if (ref.current) {
    //   ref.current.style.transform = "scale(0.96)";
    //   setTimeout(() => {
    //     if (ref.current) {
    //       ref.current.style.transform = "";
    //     }
    //   }, 100);
    //   setInputValue("");
    // }
  }

  return (
    <div className={`bg ${isVisible ? "cmdk-not-visible" : "cmdk-visible"}`}>
      <div className="vercel">
        <Command
          ref={ref}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              bounce();
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
            autoFocus={true}
            placeholder="Start typing to search..."
            onValueChange={(value) => {
              setInputValue(value);
            }}
          />
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
                  key={(item as any).name}
                  value={(item as any).name!}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {serviceIconMap[(item as any).awsService]()}
                    <span style={{ marginLeft: "8px" }}>
                      {(item as any).name}{" "}
                    </span>
                  </div>
                  <span>{(item as any).region}</span>
                </Command.Item>
              );
            })}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
