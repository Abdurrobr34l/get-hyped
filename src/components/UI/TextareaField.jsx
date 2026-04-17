import { useState } from "react";

const SuccessIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${className}`} fill="none">
    <path d="M11.25 14.25L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 10.5L11.25 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12Z"
      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ErrorIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${className}`} fill="none">
    <path opacity="0.1"
      d="M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z"
      fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 16.5C12.55 16.5 13 16.05 13 15.5C13 14.95 12.55 14.5 12 14.5C11.45 14.5 11 14.95 11 15.5C11 16.05 11.45 16.5 12 16.5Z"
      fill="currentColor"/>
  </svg>
);

const TextareaField = ({
  label,
  placeholder,
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
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          className={`
            w-full border p-4 pr-12 rounded-lg bg-transparent outline-none h-32 resize-none
            ${touched ? (isValid ? "border-green-500" : "border-red-500") : "border-gray-300"}
          `}
          placeholder={placeholder}
        />

        {touched && (
          <div className="absolute right-4 top-4">
            {isValid ? (
              <SuccessIcon className="text-green-500" />
            ) : (
              <ErrorIcon className="text-red-500" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextareaField;