import { useContext } from "react";
import AccordionContext from "../context/AccordionContext";

const useAccordionContext = () => {
  return useContext(AccordionContext);
};

export default useAccordionContext;
