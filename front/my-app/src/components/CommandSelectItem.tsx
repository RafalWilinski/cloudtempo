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
      <input
        checked={isChecked}
        type="checkbox"
        id={`command-select-item-${value}`}
        name={value}
        value={value}
      />
      <label htmlFor={`command-select-item-${value}`}> {label}</label>
    </Command.Item>
  );
}
