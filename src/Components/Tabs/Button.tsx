import React from "react";
import { useTabContext } from "../../hooks/useTabContext";

interface IButtonProps {
  id: string;
  text: string;
}

const Button: React.FC<IButtonProps> = ({ id, text }: IButtonProps) => {
  const { selectedTabId, handleSelectedTabId } = useTabContext();
  const isSelected = selectedTabId === id;
  return (
    <button
      style={{
        color: isSelected ? "white" : "black",
        backgroundColor: isSelected ? "black" : "white",
      }}
      onClick={() => handleSelectedTabId(id)}
    >
      {text}
    </button>
  );
};

export default Button;
