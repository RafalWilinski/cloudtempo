import { Command } from "cmdk";
import { toast } from "react-hot-toast";
import * as dynamodb from "../services/DynamoDB";
import * as lambda from "../services/Lambda";
import * as s3 from "../services/S3";
import * as cloudformation from "../services/Cloudformation";
import * as cloudwatchlogs from "../services/CloudwatchLogs";

interface SelectedServicesProps {
  isDemo?: boolean;
  enabledServices: string[];
  setEnabledServices: (enabledServices: string[]) => void;
}

const services = [dynamodb, lambda, s3, cloudwatchlogs, cloudformation];

export function SelectedServicesMenu({
  isDemo,
  enabledServices,
  setEnabledServices,
}: SelectedServicesProps) {
  return (
    <Command.Group heading="Services" style={{ marginTop: "10px" }}>
      <Command.List>
        {services.map((service) => {
          return (
            <Command.Item
              key={`${service.code}`}
              value={`${service.code}`}
              onSelect={() => {
                if (isDemo) {
                  toast.success("Come on, this ain't real console!");
                  return;
                }
              }}
            >
              {service.name}
            </Command.Item>
          );
        })}
      </Command.List>
    </Command.Group>
  );
}
