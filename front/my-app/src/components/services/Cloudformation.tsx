import { Command } from "cmdk";
import {
  CalendarDaysIcon,
  PlayIcon,
  CubeTransparentIcon,
  IdentificationIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { Document } from "../../document";
import { getCurrentAccountId } from "../../lib/getCurrentAccountId";
import { toast } from "react-toastify";

export const url = (
  name: string,
  region: string,
  accountId: string,
  stackId: string,
  tab: string = "stackinfo"
) =>
  `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/${tab}?filteringStatus=active&filteringText=&viewNested=true&hideStacks=false&stackId=arn%3Aaws%3Acloudformation%3A${region}%3A${accountId}%3Astack%2F${name}%2F${stackId}`;

export const icon = new URL("../../img/cloudformation.svg", import.meta.url);

export const code = "cloudformation";
export const name = "AWS CloudFormation";

export interface MenuProps {
  document: Document;
}

export function Menu({ document }: MenuProps) {
  return (
    <>
      <Command.Group heading={document.name}>
        <Command.Item
          onSelect={() => {
            location.href = url(
              document.name!,
              document.region,
              getCurrentAccountId(),
              (document.arn ?? "").split("/").pop()!
            );
          }}
        >
          <PlayIcon width={20} height={20} />
          Open
        </Command.Item>
        <Command.Item
          onSelect={async () => {
            if (document.arn) {
              await navigator.clipboard.writeText(document.arn);
              toast.success("ARN copied to clipboard!", {
                hideProgressBar: false,
              });
            }
          }}
        >
          <IdentificationIcon width={20} height={20} />
          Copy ARN
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = url(
              document.name!,
              document.region,
              getCurrentAccountId(),
              (document.arn ?? "").split("/").pop()!,
              "events"
            );
          }}
        >
          <CalendarDaysIcon width={20} height={20} />
          Events
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = url(
              document.name!,
              document.region,
              getCurrentAccountId(),
              (document.arn ?? "").split("/").pop()!,
              "resources"
            );
          }}
        >
          <CubeTransparentIcon width={20} height={20} />
          Resources
        </Command.Item>
        <Command.Item
          onSelect={() => {
            location.href = url(
              document.name!,
              document.region,
              getCurrentAccountId(),
              (document.arn ?? "").split("/").pop()!,
              "outputs"
            );
          }}
        >
          <DocumentCheckIcon width={20} height={20} />
          Outputs
        </Command.Item>
      </Command.Group>
    </>
  );
}
