import { Command } from "cmdk";
import {
  CalendarDaysIcon,
  PlayIcon,
  CubeTransparentIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { Document } from "../../document";

export const url = (
  name: string,
  region: string,
  accountId: string,
  stackId: string
) =>
  `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/stackinfo?filteringStatus=active&filteringText=&viewNested=true&hideStacks=false&stackId=arn%3Aaws%3Acloudformation%3A${region}%3A${accountId}%3Astack%2F${name}%2F${stackId}`;

export const icon =
  "https://d2q66yyjeovezo.cloudfront.net/icon/5d3629a64564e611bbeae9b3045be424-e9ebf1d2d9d9c14a684cec1c80e127eb.svg";

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
            /* todo */
          }}
        >
          <PlayIcon width={20} height={20} />
          Open
        </Command.Item>
        <Command.Item
          onSelect={() => {
            /* todo */
          }}
        >
          <IdentificationIcon width={20} height={20} />
          Copy ARN
        </Command.Item>
        <Command.Item
          onSelect={() => {
            /* todo */
          }}
        >
          <CalendarDaysIcon width={20} height={20} />
          Events
        </Command.Item>
        <Command.Item
          onSelect={() => {
            /* todo */
          }}
        >
          <CubeTransparentIcon width={20} height={20} />
          Show Resources...
        </Command.Item>
      </Command.Group>
    </>
  );
}
