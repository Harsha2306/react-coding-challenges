import React, { useState } from "react";
import { TNullableString } from "../../types";
import AccordionContext from "../../context/AccordionContext";

interface IAccordionContextProviderProps {
  children: React.ReactNode;
}

const AccordionContextProvider: React.FC<IAccordionContextProviderProps> = ({
  children,
}: IAccordionContextProviderProps) => {
  const [selectedId, setSelectedId] = useState<TNullableString>(null);

  return (
    <AccordionContext.Provider
      value={{
        selectedId,
        handleSelectedId: (id: string) => {
          setSelectedId((prev) => (prev === id ? null : id));
        },
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionContextProvider;
