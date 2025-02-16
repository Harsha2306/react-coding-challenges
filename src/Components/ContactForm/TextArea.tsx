import React from "react";

interface ITextAreaProps {
  name: string;
  label: string;
  id: string;
  value: string;
  placeHolder: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<ITextAreaProps> = ({
  name,
  label,
  id,
  value,
  placeHolder,
  handleChange,
}: ITextAreaProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={(e) => handleChange(e)}
        placeholder={placeHolder}
        value={value}
        id={id}
        name={name}
      />
    </div>
  );
};

export default TextArea;
