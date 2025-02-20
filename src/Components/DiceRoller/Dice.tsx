import React from "react";

interface IDiceProps {
  faceNumber: number;
}

const Dice: React.FC<IDiceProps> = ({ faceNumber }: IDiceProps) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "10px",
        display: "inline-block",
        margin: "5px",
      }}
    >
      {faceNumber}
    </div>
  );
};

export default Dice;
