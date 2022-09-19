import { Command } from "cmdk";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import * as dynamodb from "../services/DynamoDB";
import * as lambda from "../services/Lambda";
import * as s3 from "../services/S3";
import * as cloudformation from "../services/Cloudformation";
import * as cloudwatchlogs from "../services/CloudwatchLogs";
import { CommandSelectItem } from "../CommandSelectItem";
import { useState } from "react";
import { getCurrentAccountId } from "../../lib/getCurrentAccountId";

interface SelectedServicesProps {
  isDemo?: boolean;
}

const services = [dynamodb, lambda, s3, cloudwatchlogs, cloudformation];

export const getCurrentlySelectedServices = () => {
  const cookieKey = `selected-services-${getCurrentAccountId()}`;
  const selectedServices = JSON.parse(
    Cookies.get(cookieKey) ?? JSON.stringify(services.map((s) => s.code))
  );
  return selectedServices;
};

export function SelectedServicesMenu({ isDemo }: SelectedServicesProps) {
  const cookieKey = `selected-services-${getCurrentAccountId()}`;
  const initialSelectedServices = JSON.parse(
    Cookies.get(cookieKey) ?? JSON.stringify(services.map((s) => s.code))
  );

  const [enabledServices, setEnabledServices] = useState<string[]>(
    initialSelectedServices
  );

  return (
    <Command.Group heading="Services" style={{ marginTop: "10px" }}>
      {services.map((service) => {
        return (
          <CommandSelectItem
            isChecked={enabledServices.includes(service.code)}
            label={service.name}
            key={`${service.code}`}
            value={`${service.code}`}
            onSelect={() => {
              if (isDemo) {
                toast.success("Come on, this ain't real console!");
                return;
              }

              if (enabledServices.includes(service.code)) {
                const newServices = enabledServices.filter(
                  (s) => s !== service.code
                );
                setEnabledServices(newServices);
                Cookies.set(cookieKey, JSON.stringify(newServices));
              } else {
                const newServices = [...enabledServices, service.code];
                setEnabledServices([...enabledServices, service.code]);
                Cookies.set(cookieKey, JSON.stringify(newServices));
              }
            }}
          />
        );
      })}
    </Command.Group>
  );
}
