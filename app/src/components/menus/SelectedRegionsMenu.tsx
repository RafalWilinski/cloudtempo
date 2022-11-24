import { Command } from "cmdk";
import Cookies from "js-cookie";
import { useState } from "react";
import { getCurrentAccountId } from "../../lib/getCurrentAccountId";
import { CommandSelectItem } from "../CommandSelectItem";
import { regions } from "./RegionsMenu";

export const getCurrentlySelectedRegions = () => {
  const cookieKey = `selected-regions-${getCurrentAccountId()}`;
  const selectedServices = JSON.parse(
    Cookies.get(cookieKey) ?? JSON.stringify(regions.map((s) => s.code))
  );
  return selectedServices;
};

export function SelectedRegionsMenu() {
  const cookieKey = `selected-regions-${getCurrentAccountId()}`;
  const initialSelectedServices = JSON.parse(
    Cookies.get(cookieKey) ?? JSON.stringify(regions.map((s) => s.code))
  );

  const [enabledRegions, setEnabledRegions] = useState<string[]>(
    initialSelectedServices
  );

  return (
    <Command.Group heading="Regions">
      {regions.map((region) => {
        return (
          <CommandSelectItem
            isChecked={enabledRegions.includes(region.code)}
            label={`${region.name} - ${region.code}`}
            key={`${region.code}`}
            value={`${region.code}`}
            onSelect={() => {
              if (enabledRegions.includes(region.code)) {
                const newRegions = enabledRegions.filter(
                  (s) => s !== region.code
                );
                setEnabledRegions(newRegions);
                Cookies.set(cookieKey, JSON.stringify(newRegions));
              } else {
                const newRegions = [...enabledRegions, region.code];
                setEnabledRegions([...enabledRegions, region.code]);
                Cookies.set(cookieKey, JSON.stringify(newRegions));
              }
            }}
          />
        );
      })}
    </Command.Group>
  );
}
