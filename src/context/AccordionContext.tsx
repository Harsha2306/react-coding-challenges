import { createContext } from "react";
import { TNullableString } from "../types";

interface IAccordionContextProps {
  selectedId: TNullableString;
  handleSelectedId: (id: string) => void;
}

const AccordionContext = createContext<IAccordionContextProps | undefined>(
  undefined
);

export default AccordionContext;
