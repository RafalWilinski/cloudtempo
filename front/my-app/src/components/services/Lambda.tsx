import { Command } from "cmdk";
import { Document } from "../../document";
import {
  ArchiveBoxIcon,
  ArrowDownCircleIcon,
  ChartBarSquareIcon,
  BookOpenIcon,
  PlayIcon,
  PaperAirplaneIcon,
  Cog6ToothIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

export const icon =
  "https://d2q66yyjeovezo.cloudfront.net/icon/945f3fc449518a73b9f5f32868db466c-926961f91b072604c42b7f39ce2eaf1c.svg";

export const url = (name: string, region: string, tab: string = "code") =>
  `https://${region}.console.aws.amazon.com/lambda/home?region=${region}#/functions/${name}?tab=${tab}`;

export const code = "lambda";
export const name = "AWS Lambda";

const logsUrl = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logsV2:log-groups/log-group/$252Faws$252Flambda$252F${name}`;

const logInsights = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logsV2:logs-insights$3FqueryDetail$3D~(end~0~start~-3600~timeType~'RELATIVE~unit~'seconds~editorString~'~isLiveTail~false~queryId~'~source~(~'*2faws*2flambda*2f${name}))`;

export interface MenuProps {
  document: Document;
}

export function Menu({ document }: MenuProps) {
  return (
    <>
      <Command.Group heading={document.name}>
        <Command.Item
          onSelect={() => {
            window.location.href = url(document.name!, document.region);
          }}
        >
          <PlayIcon width={20} height={20} />
          Open
        </Command.Item>
        <Command.Item
          onSelect={() => {
            window.location.href = url(document.name!, document.region);
          }}
        >
          <IdentificationIcon width={20} height={20} />
          Copy ARN
        </Command.Item>
        <Command.Item
          onSelect={() => {
            window.location.href = url(
              document.name!,
              document.region,
              "testing"
            );
          }}
        >
          <ArrowDownCircleIcon width={20} height={20} />
          Testing / Invoke
        </Command.Item>
        <Command.Item
          onSelect={() => {
            window.location.href = url(
              document.name!,
              document.region,
              "monitoring"
            );
          }}
        >
          <ChartBarSquareIcon width={20} height={20} /> Metrics
        </Command.Item>
        <Command.Item
          onSelect={() => {
            window.location.href = logsUrl(document.name!, document.region);
          }}
        >
          <ArchiveBoxIcon width={20} height={20} /> Log Groups
        </Command.Item>
        <Command.Item
          onSelect={() => {
            window.location.href = logInsights(document.name!, document.region);
          }}
        >
          <BookOpenIcon width={20} height={20} /> Logs Insights
        </Command.Item>
        <Command.Item>
          <PaperAirplaneIcon width={20} height={20} />
          Traces (not implemented)
        </Command.Item>
        <Command.Item
          onSelect={() => {
            window.location.href = url(
              document.name!,
              document.region,
              "configure"
            );
          }}
        >
          <Cog6ToothIcon width={20} height={20} />
          Configuration
        </Command.Item>
      </Command.Group>
    </>
  );
}
