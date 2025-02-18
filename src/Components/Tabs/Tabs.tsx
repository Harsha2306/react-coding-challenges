import React from "react";
import { buttons, tabs as contents } from "../../data/tabsData";
import Button from "./Button";
import TabContextProvider from "./TabContextProvider";
import Content from "./Content";

const Tabs: React.FC = () => {
  return (
    <TabContextProvider>
      <div>
        {buttons.map((btn) => (
          <Button key={btn.id} {...btn} />
        ))}
        {contents.map((content) => (
          <Content key={content.id} {...content} />
        ))}
      </div>
    </TabContextProvider>
  );
};

export default Tabs;
