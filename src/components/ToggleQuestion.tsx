import React from "react";

interface ToggleProps {
  label?: string; // preferred name
  question?: string; // legacy alias
  description?: string;
  value: boolean;
  onChange: (val: boolean) => void;
}

export default function ToggleQuestion({
  label,
  question,
  description,
  value,
  onChange,
}: ToggleProps) {
  const title = label || question || "";
  return (
    <div className="mb-6">
      <div className="flex items-center mb-1">
        <label className="text-offWhite text-lg font-medium">{title}</label>
        <button
          className="ml-2 text-gray-500 hover:text-offWhite"
          title={description}
          aria-label="More info"
          type="button"
        >
          ?
        </button>
      </div>
      {description && (
        <p className="text-gray-400 text-sm mb-2">{description}</p>
      )}
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            value === false
              ? "bg-red-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          No
        </button>
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            value === true
              ? "bg-green-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
