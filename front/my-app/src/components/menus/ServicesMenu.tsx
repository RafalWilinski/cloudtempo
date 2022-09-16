import { Command } from "cmdk";
import { services } from "../../lib/services";
import { toast } from "react-hot-toast";

export function ServicesMenu({ isDemo }: { isDemo?: boolean }) {
  const currentRegion = "us-east-1";
  return (
    <Command.Group heading="Services" style={{ marginTop: "10px" }}>
      <Command.List>
        {services.map((service) => {
          return (
            <Command.Item
              key={`${service.ServiceName} ${service.ServiceShortName}`}
              value={`${service.ServiceName} ${service.ServiceShortName}`}
              onSelect={() => {
                if (isDemo) {
                  toast.success("Come on, this ain't real console!");
                  return;
                }

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
