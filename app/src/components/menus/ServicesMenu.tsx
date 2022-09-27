import { Command } from "cmdk";
import { toast } from "react-toastify";
import { Document } from "../../document";

export function ServicesMenu({
  isDemo,
  services,
}: {
  isDemo?: boolean;
  services: Document[];
}) {
  const currentRegion = "us-east-1";
  return (
    <Command.Group heading="Services" style={{ marginTop: "10px" }}>
      {(services ?? []).map((service) => {
        return (
          <Command.Item
            key={`${service.arn}`}
            value={`result ${service.name}`}
            onSelect={() => {
              if (isDemo) {
                toast.warning("Come on, this ain't real console!", {
                  hideProgressBar: false,
                });
                return;
              }

              if (service.url) {
                location.href = service.url;
              } else {
                location.href = `https://${currentRegion}.console.aws.amazon.com/${service.ServiceShortName}/home?region=${currentRegion}#/functions`;
              }
            }}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <span style={{ marginBottom: 0 }}>{service.name}</span>
            <p
              style={{
                display: "block",
                marginTop: 0,
                marginBottom: 0,
                fontSize: "10px",
                width: "100%",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {service.description}
            </p>
          </Command.Item>
        );
      })}
    </Command.Group>
  );
}
