import { useState } from "react";

const CreateInput = ({ inputType, className, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      className={className}
      type={inputType}
      value={inputValue}
      onChange={(e) => setInputValue(e.targetvalue)}
    />
  );
};

export default CreateInput;
