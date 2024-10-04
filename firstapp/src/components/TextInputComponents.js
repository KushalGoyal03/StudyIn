import React, { useState } from "react";

// Text Input Component
const TextInput = ({
  type,
  value,
  onChange,
  placeholder,
  isDisabled,
  className,
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={isDisabled}
    className={className}
  />
);

// Standard Text Input
export const StandardTextInput = (props) => (
  <TextInput
    type="text"
    {...props}
    className={`standard-input ${props.className}`}
  />
);

// Filled Text Input
export const FilledTextInput = (props) => (
  <TextInput
    type="text"
    {...props}
    className={`filled-input ${props.className}`}
  />
);

// Outline Text Input
export const OutlineTextInput = (props) => (
  <TextInput
    type="text"
    {...props}
    className={`outline-input ${props.className}`}
  />
);

// Number Input
export const NumberInput = (props) => (
  <TextInput
    type="number"
    {...props}
    className={`number-input ${props.className}`}
  />
);

// Read-Only Input
export const ReadOnlyInput = ({ value, className }) => (
  <TextInput
    type="text"
    value={value}
    readOnly
    className={`readonly-input ${className}`}
  />
);

// Currency Input with Icon
export const CurrencyInput = ({ value, onChange, isDisabled, className }) => (
  <div className={`currency-input ${className}`}>
    <span>$</span>
    <TextInput
      type="text"
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    />
  </div>
);

// Disabled Text Input
export const DisabledTextInput = ({ placeholder, className }) => (
  <TextInput
    type="text"
    placeholder={placeholder}
    disabled
    className={`disabled-input ${className}`}
  />
);

// Password Input without Show Icon
export const PasswordInputNoIcon = (props) => (
  <TextInput
    type="password"
    {...props}
    className={`password-no-icon ${props.className}`}
  />
);

// Validation Input
// export const ValidatedTextInput = ({ value, onChange, isValid, className }) => (
//   <TextInput
//     type="text"
//     value={value}
//     onChange={onChange}
//     className={`validated-input ${isValid ? "valid" : "invalid"} ${className}`}
//   />
// );

// Validation Input
export const ValidatedTextInput = ({ value, onChange, isValid, className }) => {
  const [inputValue, setInputValue] = useState(value);
  const [isValidInput, setIsValidInput] = useState(isValid);

  const validateInput = (value) => {
    // Example validation: check if the input is not empty
    return value.trim() !== "";
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    const valid = validateInput(newValue);
    setIsValidInput(valid);
    onChange(newValue); // Call parent onChange if needed
  };

  return (
    <TextInput
      type="text"
      value={inputValue}
      onChange={handleChange}
      className={`validated-input ${
        isValidInput ? "valid" : "invalid"
      } ${className}`}
    />
  );
};

// Password Input with Eye Icon
export const PasswordInputWithIcon = ({ value, onChange, className }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`password-input-with-icon ${className}`}>
      <TextInput
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? "👁️" : "👁️‍🗨️"}{" "}
        {/* Eye icon for showing/hiding password */}
      </button>
    </div>
  );
};
