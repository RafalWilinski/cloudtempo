import * as Select from "@radix-ui/react-select";
import { useState } from "react";

export interface Region {
  name: string;
  value: string;
  storage: number;
  x86: X86;
  arm?: Arm;
  windows: Windows;
  spot: Spot;
  archOptions: ArchType[];
}

export interface X86 {
  perVCPUHour: number;
  perGBHour: number;
}

export interface Arm {
  perVCPUHour: number;
  perGBHour: number;
}

export interface Windows {
  perVCPUHour: number;
  fee: number;
  perGBHour: number;
}

export interface Spot {
  perVCPUHour: number;
  perGBHour: number;
}

const regions: Region[] = [
  {
    name: "US East (N. Virginia)",
    value: "us-east-1",
    storage: 0.000111,
    archOptions: ["x86", "arm", "windows", "spot"],
    x86: {
      perVCPUHour: 0.04048,
      perGBHour: 0.004445,
    },
    arm: {
      perVCPUHour: 0.03238,
      perGBHour: 0.00356,
    },
    windows: {
      perVCPUHour: 0.09148,
      fee: 0.046,
      perGBHour: 0.01005,
    },
    spot: {
      perVCPUHour: 0.01291446,
      perGBHour: 0.0014181,
    },
  },
  {
    name: "US East (Ohio)",
    value: "us-east-2",
    storage: 0.000111,
    archOptions: ["x86", "arm", "windows", "spot"],
    x86: {
      perVCPUHour: 0.04048,
      perGBHour: 0.004445,
    },
    arm: {
      perVCPUHour: 0.03238,
      perGBHour: 0.00356,
    },
    windows: {
      perVCPUHour: 0.09148,
      fee: 0.046,
      perGBHour: 0.01005,
    },
    spot: {
      perVCPUHour: 0.01291446,
      perGBHour: 0.0014181,
    },
  },
  {
    name: "US West (Northern California)",
    value: "us-west-1",
    storage: 0.000133,
    archOptions: ["x86", "arm", "windows", "spot"],
    x86: {
      perVCPUHour: 0.04656,
      perGBHour: 0.00511,
    },
    arm: {
      perVCPUHour: 0.03725,
      perGBHour: 0.00409,
    },
    windows: {
      perVCPUHour: 0.10523,
      fee: 0.046,
      perGBHour: 0.01155,
    },
    spot: {
      perVCPUHour: 0.013968,
      perGBHour: 0.001533,
    },
  },
  {
    name: "US West (Oregon)",
    value: "us-west-2",
    archOptions: ["x86", "arm", "windows", "spot"],
    storage: 0.000111,
    x86: {
      perVCPUHour: 0.04048,
      perGBHour: 0.004445,
    },
    arm: {
      perVCPUHour: 0.03238,
      perGBHour: 0.00356,
    },
    windows: {
      perVCPUHour: 0.09148,
      fee: 0.046,
      perGBHour: 0.01005,
    },
    spot: {
      perVCPUHour: 0.01291446,
      perGBHour: 0.0014181,
    },
  },
  {
    name: "Africa (Cape Town)",
    value: "af-south-1",
    storage: 0.000145,
    archOptions: ["x86", "windows", "spot"],
    x86: {
      perVCPUHour: 0.0546,
      perGBHour: 0.006,
    },
    windows: {
      perVCPUHour: 0.1235,
      fee: 0.046,
      perGBHour: 0.01356,
    },
    spot: {
      perVCPUHour: 0.01638,
      perGBHour: 0.0018,
    },
  },
  {
    name: "Asia Pacific (Hong Kong)",
    value: "ap-east-1",
    storage: 0.000147,
    archOptions: ["x86", "windows", "spot", "arm"],
    x86: {
      perVCPUHour: 0.0556,
      perGBHour: 0.0061,
    },
    arm: {
      perVCPUHour: 0.04449,
      perGBHour: 0.00487,
    },
    windows: {
      perVCPUHour: 0.12569,
      fee: 0.046,
      perGBHour: 0.01375,
    },
    spot: {
      perVCPUHour: 0.01668,
      perGBHour: 0.00183,
    },
  },
  {
    name: "Canada (central)",
    value: "ca-central-1",
    storage: 0.000122,
    archOptions: ["x86", "windows", "spot", "arm"],
    x86: {
      perVCPUHour: 0.04456,
      perGBHour: 0.004865,
    },
    arm: {
      perVCPUHour: 0.03565,
      perGBHour: 0.00389,
    },
    windows: {
      perVCPUHour: 0.10071,
      fee: 0.046,
      perGBHour: 0.01099,
    },
    spot: {
      perVCPUHour: 0.01344005,
      perGBHour: 0.00146737,
    },
  },
  {
    name: "Europe (Frankfurt)",
    value: "eu-central-1",
    storage: 0.000132,
    archOptions: ["x86", "windows", "spot", "arm"],
    x86: {
      perVCPUHour: 0.04656,
      perGBHour: 0.00511,
    },
    arm: {
      perVCPUHour: 0.03725,
      perGBHour: 0.00409,
    },
    windows: {
      perVCPUHour: 0.10523,
      fee: 0.046,
      perGBHour: 0.01155,
    },
    spot: {
      perVCPUHour: 0.01548611,
      perGBHour: 0.00169961,
    },
  },
  {
    name: "Asia Pacific (Sydney)",
    value: "ap-southeast-2",
    storage: 0.000133,
    archOptions: ["x86", "windows", "spot", "arm"],
    x86: {
      perVCPUHour: 0.04856,
      perGBHour: 0.00532,
    },
    arm: {
      perVCPUHour: 0.03885,
      perGBHour: 0.00426,
    },
    windows: {
      perVCPUHour: 0.10975,
      fee: 0.046,
      perGBHour: 0.01202,
    },
    spot: {
      perVCPUHour: 0.014568,
      perGBHour: 0.001596,
    },
  },
  {
    name: "Europe (Ireland)",
    value: "eu-west-1",
    storage: 0.000122,
    archOptions: ["x86", "windows", "spot", "arm"],
    x86: {
      perVCPUHour: 0.04048,
      perGBHour: 0.004445,
    },
    arm: {
      perVCPUHour: 0.03238,
      perGBHour: 0.00356,
    },
    windows: {
      perVCPUHour: 0.09148,
      fee: 0.046,
      perGBHour: 0.01005,
    },
    spot: {
      perVCPUHour: 0.01241498,
      perGBHour: 0.00136326,
    },
  },
  {
    name: "Europe (Paris)",
    value: "eu-west-3",
    storage: 0.000129,
    archOptions: ["x86", "windows", "spot", "arm"],
    x86: {
      perVCPUHour: 0.0486,
      perGBHour: 0.0053,
    },
    arm: {
      perVCPUHour: 0.03888,
      perGBHour: 0.00424,
    },
    windows: {
      perVCPUHour: 0.10984,
      fee: 0.046,
      perGBHour: 0.01198,
    },
    spot: {
      perVCPUHour: 0.01458,
      perGBHour: 0.00159,
    },
  },
];

type ArchType = "x86" | "arm" | "windows" | "spot";
type DurationType = "hour" | "month";

const selectStyle = {
  padding: "8px",
  fontSize: "16px",
  borderRadius: "4px",
  borderColor: "#444",
  backgroundColor: "transparent",
  boxShadow: "none",
  borderWidth: "1px",
  borderStyle: "solid",
  WebkitAppearance: "none",
  // outline: "none",
};

const vcpuOptions = [0.25, 0.5, 1, 2, 4, 8, 16];
const memoryOptions = {
  0.25: [0.5, 1, 2],
  0.5: [1, 2, 3, 4],
  1: [2, 3, 4, 5, 6, 7, 8],
  2: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  4: [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30,
  ],
  8: [16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60],
  16: [32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120],
};

const Calculator = () => {
  const [region, setRegion] = useState<Region>(regions[0]);
  const [durationType, setDurationType] = useState<DurationType>("month");
  const [duration, setDuration] = useState<number>(730);
  const [vcpu, setVcpu] = useState<number>(0.25);
  const [memory, setMemory] = useState<number>(0.5);
  const [arch, setArch] = useState<ArchType>("x86");
  const [storage, setStorage] = useState<number>(10);

  const vcpuMemoryOptions: number[] = memoryOptions[vcpu as any];
  const selectableRegions = regions.map((region) => region.name);

  const pricing = region[arch]!;
  const nonZeroDuration = duration || 0;
  const nonZeroStorage = storage || 0;
  const billableStorage = Math.max(0, nonZeroStorage - 20);
  const archOptions = region.archOptions;

  const perHour =
    vcpu * pricing.perVCPUHour +
    memory * pricing.perGBHour +
    billableStorage * region.storage;
  const totalPrice = perHour * nonZeroDuration;

  console.log({ vcpu, memory, arch, storage });

  if (vcpuMemoryOptions.indexOf(memory) === -1) {
    setMemory(vcpuMemoryOptions[0]);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <table>
        <tbody>
          <tr>
            <td>Architecture</td>
            <td>
              <select
                name="arch"
                id="arch"
                style={selectStyle}
                onChange={(e) => {
                  setArch(e.target.value as ArchType);
                }}
                value={arch}
              >
                {archOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Region</td>
            <td>
              <select
                name="region"
                id="region"
                style={selectStyle}
                onChange={(e) => {
                  const region = regions.find(
                    (region) => region.name === e.target.value
                  );
                  setRegion(region as Region);

                  if (!region?.arm && arch === "arm") {
                    setArch("x86");
                  }
                }}
                value={region.name}
              >
                {selectableRegions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>
              <select
                name="durationType"
                id="durationType"
                style={selectStyle}
                value={
                  durationType === "hour"
                    ? "Custom hours"
                    : "Whole Month (~730 hours)"
                }
                onChange={(e) => {
                  setDurationType(
                    e.target.value === "Custom hours" ? "hour" : "month"
                  );
                  setDuration(e.target.value === "Custom hours" ? 1 : 730);
                }}
              >
                <option>Custom hours</option>
                <option>Whole Month (~730 hours)</option>
              </select>
            </td>
            {durationType === "hour" && (
              <td>
                <input
                  name="duration"
                  id="duration"
                  type="number"
                  style={{
                    ...selectStyle,
                    marginRight: "6px",
                  }}
                  value={duration}
                  onChange={(e) => {
                    setDuration(parseInt(e.target.value, 10));
                  }}
                ></input>
                hours
              </td>
            )}
          </tr>

          <tr>{/* <span style={{ padding: "8px" }}></span> */}</tr>
          <tr>
            <td>vCPU</td>
            <td>
              <select
                name="vcpu"
                id="vcpu"
                style={selectStyle}
                value={`${vcpu} vCPU`}
                onChange={(e) => {
                  setVcpu(parseFloat(e.target.value.replace(" vCPU", "")));
                }}
              >
                {vcpuOptions.map((option) => (
                  <option key={option}>{option} vCPU</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Memory</td>
            <td>
              <select
                name="memory"
                id="memory"
                style={selectStyle}
                value={`${memory} GB`}
                onChange={(e) => {
                  setMemory(parseInt(e.target.value, 10));
                }}
              >
                {vcpuMemoryOptions.map((option) => (
                  <option key={option}>{option} GB</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>
              <input
                id="storage"
                type="number"
                style={selectStyle}
                value={storage}
                onChange={(e) => {
                  setStorage(parseInt(e.target.value, 10));
                }}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <div
        style={{
          paddingTop: "12px",
          borderTop: "1px solid #333",
          color: "#777",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>
          CPU Cost: {duration || 0} hours * ${pricing.perVCPUHour} per vCPU/hour
          * {vcpu} vCPUs = $
          {(vcpu * pricing.perVCPUHour * nonZeroDuration).toFixed(3)}{" "}
          {durationType === "month" && "per month"}
        </span>
        <span>
          Memory Cost: {duration || 0} hours * ${memory}GB * $
          {pricing.perGBHour} per GB/hour = $
          {(memory * pricing.perGBHour * nonZeroDuration).toFixed(3)}{" "}
          {durationType === "month" && "per month"}
        </span>
        <span>
          Storage Cost: $
          {(billableStorage * region.storage * nonZeroDuration).toFixed(3)}{" "}
          {durationType === "month" && "per month"} (first 20GB are free)
        </span>
      </div>
      <h2>Total Cost: ${totalPrice.toFixed(3)}</h2>
    </div>
  );
};

export default Calculator;
