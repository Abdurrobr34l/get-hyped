import { useState } from "react";

const SuccessIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 text-gray-300"
    fill="none"
  >
    <path
      d="M11.25 14.25L9 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 10.5L11.25 14.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-500">
    <path opacity="0.1" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3Z" fill="currentColor" />
    <path d="M12 12.5V7.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 16.5C12.55 16.5 13 16.05 13 15.5C13 14.95 12.55 14.5 12 14.5C11.45 14.5 11 14.95 11 15.5C11 16.05 11.45 16.5 12 16.5Z" fill="currentColor" />
  </svg>
);

const InputField = ({
  label,
  placeholder,
  type = "text",
  // required = false,
  validator = () => true,
}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validator(value);

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium">{label}</label>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          className={`
            w-full border p-4 pr-12 rounded-lg bg-transparent outline-none
            transition-colors
            ${touched ? (isValid ? "border-black" : "border-red-500") : "border-gray-300"}
          `}
          placeholder={placeholder}
        />

        {/* ICON */}
        {touched && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {isValid ? <SuccessIcon /> : <ErrorIcon />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;