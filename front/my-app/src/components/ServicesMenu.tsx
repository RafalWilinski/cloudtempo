import { Command } from "cmdk";
import { services } from "../lib/services";

export function ServicesMenu() {
  const currentRegion = "us-east-1";
  return (
    <Command.Group heading="Services" style={{ marginTop: "10px" }}>
      <Command.List>
        {services.map((service) => {
          return (
            <Command.Item
              value={`${service.ServiceName} ${service.ServiceShortName}`}
              onSelect={() => {
                if (service.ConsoleLink) {
                  location.href = service.ConsoleLink;
                } else {
                  location.href = `https://${currentRegion}.console.aws.amazon.com/${service.ServiceShortName}/home?region=${currentRegion}#/functions`;
                }
              }}
            >
              {service.ServiceName}
            </Command.Item>
          );
        })}
      </Command.List>
    </Command.Group>
  );
}
