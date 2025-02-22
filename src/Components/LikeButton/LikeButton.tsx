import React, { useState } from "react";
import axios from "axios";

type ButtonState = "IDLE" | "HOVERED" | "LOADING" | "LIKED";

const LikeButton: React.FC = () => {
  const [btnState, setBtnState] = useState<ButtonState>("IDLE");
  const [show, setShow] = useState(false);

  const handleMouseEnter = () =>
    (btnState === "IDLE" || btnState === "LOADING") && setBtnState("HOVERED");
  const handleMouseLeave = () => btnState === "HOVERED" && setBtnState("IDLE");

  const handleClick = async () => {
    setBtnState("LOADING");
    try {
      await axios.post(
        `https://www.greatfrontend.com/api/questions/like-button`,
        {
          action: "like",
        },
        { headers: { "Content-Type": "application/json" } }
      );
      setBtnState("LIKED");
      setShow(false);
    } catch (error) {
      console.log(error);
      setShow(true);
      setBtnState("IDLE");
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100px",
          height: "50px",
          border: "0.2rem solid black",
          borderRadius: "5rem",
          borderColor: btnState === "HOVERED" ? "red" : "",
          color:
            btnState === "HOVERED"
              ? "red"
              : btnState === "LIKED"
              ? "white"
              : "",
          backgroundColor: btnState === "LIKED" ? "red" : "",
        }}
      >
        {(btnState === "IDLE" || btnState === "HOVERED") && "Like"}
        {btnState === "LOADING" && "Loading..."}
        {btnState === "LIKED" && "Liked"}
      </button>
      {show && <p>please try again</p>}
    </>
  );
};

export default LikeButton;
