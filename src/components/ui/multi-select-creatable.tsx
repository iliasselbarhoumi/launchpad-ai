import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface MultiSelectCreatableProps {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

const MultiSelectCreatable: React.FC<MultiSelectCreatableProps> = ({
  value = [],
  onChange,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addValue = (newValue: string) => {
    const trimmedValue = newValue.trim();
    if (trimmedValue && !value.includes(trimmedValue)) {
      onChange([...value, trimmedValue]);
    }
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addValue(inputValue);
    }
    if (e.key === "Backspace" && inputValue === "" && value.length > 0) {
      e.preventDefault();
      handleRemove(value[value.length - 1]);
    }
  };

  const handleRemove = (valueToRemove: string) => {
    onChange(value.filter((v) => v !== valueToRemove));
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    const valuesToAdd = paste
      .split(/,/)
      .map((v) => v.trim())
      .filter(Boolean);
    if (valuesToAdd.length > 0) {
      const newValues = [...value];
      valuesToAdd.forEach((v) => {
        if (!newValues.includes(v)) {
          newValues.push(v);
        }
      });
      onChange(newValues);
      setInputValue("");
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 p-2 border border-input rounded-md min-h-[40px]">
        {value.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="flex items-center gap-1.5 text-sm"
          >
            {item}
            <button
              type="button"
              aria-label={`Remove ${item}`}
              className="rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => handleRemove(item)}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </Badge>
        ))}
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={value.length === 0 ? placeholder : ""}
          className="flex-1 border-0 shadow-none focus-visible:ring-0 p-0 h-7"
        />
      </div>
    </div>
  );
};

export default MultiSelectCreatable;
