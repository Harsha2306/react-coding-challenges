import React from "react";
import { accordionData } from "../../data/accordionData";
import AccordionContextProvider from "./AccordionContextProvider";
import useAccordionContext from "../../hooks/useAccordionContext";

interface IAccrodionItemProps {
  id: string;
  title: string;
  description: string;
}

const Accordion: React.FC = () => {
  return (
    <AccordionContextProvider>
      {accordionData.map((accordion) => (
        <AccordionItem {...accordion} />
      ))}
    </AccordionContextProvider>
  );
};

const AccordionItem: React.FC<IAccrodionItemProps> = ({
  id,
  title,
  description,
}: IAccrodionItemProps) => {
  const accordionContext = useAccordionContext();
  if (!accordionContext)
    throw new Error("AccordionItem must be used within an AccordionProvider");

  const { selectedId, handleSelectedId } = accordionContext;
  const isOpened = selectedId === id;
  return (
    <div style={{ border: "1px solid black", marginBottom: "10px" }}>
      <button onClick={() => handleSelectedId(id)}>
        {isOpened ? "close" : "open"}
      </button>
      <h3>{title}</h3>
      {isOpened && <p>{description}</p>}
    </div>
  );
};

export default Accordion;
