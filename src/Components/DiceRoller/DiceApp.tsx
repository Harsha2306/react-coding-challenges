import React, { useState } from "react";
import DiceForm from "./DiceForm";
import DiceSection from "./DiceSection";

const DiceApp: React.FC = () => {
  const [numberOfDice, setNumberOfDice] = useState(0);
  const [show, setShow] = useState(false);

  const handleNumberOfDice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericInput = Number(e.target.value);
    if (isNaN(numericInput) || numericInput > 12 || numericInput < 0)
      alert("please enter numbers between 1-12");
    else {
      setNumberOfDice(numericInput);
      setShow(false);
    }
  };

  const generateRandomNumbers = (n: number): number[] =>
    Array.from({ length: n }, () => Math.floor(Math.random() * 6) + 1);

  return (
    <>
      <DiceForm
        setShow={setShow}
        numberOfDice={numberOfDice}
        handleNumberOfDice={handleNumberOfDice}
      />
      <DiceSection show={show} faces={generateRandomNumbers(numberOfDice)} />
    </>
  );
};

export default DiceApp;
