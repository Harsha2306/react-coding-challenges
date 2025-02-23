import React, { useEffect, useState } from "react";
import Light from "./Light";

type T_COLOUR = "green" | "yellow" | "red";

const TrafficLight: React.FC = () => {
  const [colour, setColour] = useState<T_COLOUR>("green");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (colour === "green") {
      timer = setTimeout(() => {
        setColour("yellow");
      }, 4000);
    } else if (colour === "yellow") {
      timer = setTimeout(() => {
        setColour("red");
      }, 500);
    } else if (colour === "red") {
      timer = setTimeout(() => {
        setColour("green");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [colour]);

  return (
    <div
      style={{
        padding: "0.1rem",
        width: "42px",
        height: "110px",
        backgroundColor: "black",
      }}
    >
      <Light colour="red" isActive={colour === "red"} />
      <Light colour="yellow" isActive={colour === "yellow"} />
      <Light colour="green" isActive={colour === "green"} />
    </div>
  );
};

export default TrafficLight;
