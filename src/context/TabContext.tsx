import { createContext } from "react";

interface ITabContext {
  selectedTabId: string;
  handleSelectedTabId: (id: string) => void;
}

const TabContext = createContext<ITabContext | undefined>(undefined);

export default TabContext;
