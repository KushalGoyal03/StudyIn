import React, { useState } from "react";
import {
  StandardTextInput,
  FilledTextInput,
  OutlineTextInput,
  PasswordInputNoIcon,
  NumberInput,
  ReadOnlyInput,
  CurrencyInput,
  PasswordInputWithIcon,
  ValidatedTextInput,
  DisabledTextInput,
} from "./components/TextInputComponents";
import "./styles/TextInputStyles.css";

const App = () => {
  const [standardValue, setStandardValue] = useState("");
  const [filledValue, setFilledValue] = useState("");
  const [outlineValue, setOutlineValue] = useState("");
  const [passwordValueWithIcon, setPasswordValueWithIcon] = useState("");
  const [passwordValueNoIcon, setPasswordValueNoIcon] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [readOnlyValue] = useState("Read Only Value");
  const [currencyValue, setCurrencyValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    setIsInputValid(newValue.trim() !== ""); // Example validation: non-empty input
  };

  return (
    <div>
      <StandardTextInput
        placeholder="Standard Input"
        value={standardValue}
        onChange={(e) => setStandardValue(e.target.value)}
      />
      <FilledTextInput
        placeholder="Filled Input"
        value={filledValue}
        onChange={(e) => setFilledValue(e.target.value)}
      />
      <OutlineTextInput
        placeholder="Outline Input"
        value={outlineValue}
        onChange={(e) => setOutlineValue(e.target.value)}
      />
      <PasswordInputWithIcon
        placeholder="Password"
        value={passwordValueWithIcon}
        onChange={(e) => setPasswordValueWithIcon(e.target.value)}
      />
      <PasswordInputNoIcon
        placeholder="Password"
        value={passwordValueNoIcon}
        onChange={(e) => setPasswordValueNoIcon(e.target.value)}
      />
      <NumberInput
        placeholder="Number Input"
        value={numberValue}
        onChange={(e) => setNumberValue(e.target.value)}
      />
      <ReadOnlyInput value={readOnlyValue} />
      <CurrencyInput
        placeholder="Curreny Input"
        value={currencyValue}
        onChange={(e) => setCurrencyValue(e.target.value)}
      />

      <ValidatedTextInput
        value={inputValue}
        onChange={handleInputChange}
        isValid={isInputValid}
      />
      <DisabledTextInput
        placeholder="Disabled Input"
        className="my-disabled-input"
      />
    </div>
  );
};

export default App;
