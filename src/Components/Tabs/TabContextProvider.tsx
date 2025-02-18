import React, { ReactNode, useState } from "react";
import TabContext from "../../context/TabContext";

interface ITabContextProviderProps {
  children: ReactNode;
}

const TabContextProvider: React.FC<ITabContextProviderProps> = ({
  children,
}: ITabContextProviderProps) => {
  const [selectedTabId, setSelectedTabId] = useState("html");
  return (
    <TabContext.Provider
      value={{
        selectedTabId,
        handleSelectedTabId: (id) => setSelectedTabId(id),
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export default TabContextProvider;
