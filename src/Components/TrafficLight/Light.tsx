import React from "react";

type TLightProps = {
  colour: string;
  isActive: boolean;
};

const Light: React.FC<TLightProps> = ({ colour, isActive }) => {
  return (
    <div
      style={{
        margin: "0.5rem",
        width: "25px",
        height: "25px",
        border: "1px solid black",
        backgroundColor: isActive ? colour : "",
        borderRadius: "1rem",
      }}
    />
  );
};

export default Light;
