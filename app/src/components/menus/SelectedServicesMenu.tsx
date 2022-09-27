import { Command } from "cmdk";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { CommandSelectItem } from "../CommandSelectItem";
import { useState } from "react";
import { getCurrentAccountId } from "../../lib/getCurrentAccountId";
import { supportedServices } from "../services";

interface SelectedServicesProps {
  isDemo?: boolean;
}

export const getCurrentlySelectedServices = () => {
  const cookieKey = `selected-services-${getCurrentAccountId()}`;
  const selectedServices = JSON.parse(
    Cookies.get(cookieKey) ??
      JSON.stringify(supportedServices.map((s) => s.code))
  );
  return selectedServices;
};

export function SelectedServicesMenu({ isDemo }: SelectedServicesProps) {
  const cookieKey = `selected-services-${getCurrentAccountId()}`;
  const initialSelectedServices = JSON.parse(
    Cookies.get(cookieKey) ??
      JSON.stringify(supportedServices.map((s) => s.code))
  );

  const [enabledServices, setEnabledServices] = useState<string[]>(
    initialSelectedServices
  );

  return (
    <Command.Group heading="Services" style={{ marginTop: "10px" }}>
      {supportedServices.map((service) => {
        return (
          <CommandSelectItem
            isChecked={enabledServices.includes(service.code)}
            label={service.name}
            key={`${service.code}`}
            value={`${service.code}`}
            onSelect={() => {
              if (isDemo) {
                toast.success("Come on, this ain't real console!", {
                  hideProgressBar: false,
                });
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
