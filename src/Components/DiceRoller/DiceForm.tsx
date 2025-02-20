import React from "react";

interface IDiceFromProps {
  numberOfDice: number;
  handleNumberOfDice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiceForm: React.FC<IDiceFromProps> = ({
  numberOfDice,
  handleNumberOfDice,
  setShow,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noOfDice">Number of Dice</label>
      <br />
      <input
        value={numberOfDice}
        onChange={(e) => {
          handleNumberOfDice(e);
          setShow(false);
        }}
        type="number"
        min="0"
        max="12"
        name="noOfDice"
        id="noOfDice"
      />
      <br />
      <button type="submit">Roll</button>
    </form>
  );
};

export default DiceForm;
