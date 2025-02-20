import React from "react";
import Dice from "./Dice";
import { v4 as uuidv4 } from "uuid";

interface IDiceSectionProps {
  faces: number[];
  show: boolean;
}

const DiceSection: React.FC<IDiceSectionProps> = ({
  faces,
  show,
}: IDiceSectionProps) => {
  return (
    show && (
      <section>
        {faces.map((face) => (
          <Dice key={uuidv4()} faceNumber={face} />
        ))}
      </section>
    )
  );
};
export default DiceSection;
