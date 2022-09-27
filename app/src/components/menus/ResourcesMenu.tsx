/* eslint-disable @next/next/no-img-element */
import { Command } from "cmdk";
import { Document } from "../../document";
import { serviceIconMap, serviceResourceNameMap } from "../services";

interface ResourcesMenuProps {
  loading: boolean;
  items: Document[];
  pages: string[];
  setPages: (pages: string[]) => void;
  onSelect: (item: Document) => void;
  setInputValue: (value: string) => void;
  setSelectedDocument: (document: Document) => void;
}

export function ResourcesMenu({
  onSelect,
  items,
  loading,
}: ResourcesMenuProps) {
  return (
    <>
      <Command.Group
        heading={`Resources${
          items && items.length > 0 ? ` (${items.length} found)` : ""
        }`}
      >
        {!loading && (items ?? []).length === 0 && (
          <Command.Empty>No results found.</Command.Empty>
        )}
        {loading && (
          <div className="aws-search-loading">Fetching resources...</div>
        )}
        {(items ?? []).map((item) => {
          return (
            <Command.Item
              className="aws-search-item"
              style={{
                justifyContent: "space-between",
              }}
              key={(item as any).arn}
              value={`result ${item.name!} ${item.region} ${item.awsService} ${
                item?.arn ?? ""
              } resource`}
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
                  src={serviceIconMap[item.awsService]}
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
                <div style={{ marginLeft: "8px" }}>
                  <span>{item.name} </span>
                  <p
                    style={{
                      marginTop: 0,
                      marginBottom: 0,
                      fontSize: "10px",
                    }}
                  >
                    {serviceResourceNameMap[item.awsService]}{" "}
                    {item.subtext
                      ? `/ ${item.subtext}`
                      : `${item.description ?? ""}`}
                  </p>
                </div>
              </div>
              <span>{item.region}</span>
            </Command.Item>
          );
        })}
      </Command.Group>
    </>
  );
}
