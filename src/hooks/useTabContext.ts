import { useContext } from "react";
import TabContext from "../context/TabContext";

export const useTabContext = () => {
  const tabContext = useContext(TabContext);
  if (!tabContext)
    throw new Error("tabs context must be used inside <Tabs> component");
  return tabContext;
};
