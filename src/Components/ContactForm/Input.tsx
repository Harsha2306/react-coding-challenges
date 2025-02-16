import React from "react";

interface IInputProps {
  name: string;
  label: string;
  id: string;
  value: string;
  placeHolder: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
  name,
  label,
  id,
  value,
  placeHolder,
  type,
  handleChange,
}: IInputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
