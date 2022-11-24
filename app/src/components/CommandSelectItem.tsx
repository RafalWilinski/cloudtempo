import { Command } from "cmdk";

export interface CommandSelectItemProps {
  isChecked: boolean;
  label: string;
  value: string;
  onSelect: () => void;
}

export function CommandSelectItem({
  isChecked,
  label,
  value,
  onSelect,
}: CommandSelectItemProps) {
  return (
    <Command.Item value={value} onSelect={onSelect}>
      <div
        className={
          isChecked
            ? "command-select-item-selected"
            : "command-select-item-not-selected"
        }
      >
        •
      </div>

      <label htmlFor={`command-select-item-${value}`}> {label}</label>
    </Command.Item>
  );
}
