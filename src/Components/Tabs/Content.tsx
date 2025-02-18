import React from "react";
import { useTabContext } from "../../hooks/useTabContext";

interface IContentProps {
  id: string;
  content: string;
}

const Content: React.FC<IContentProps> = ({ id, content }: IContentProps) => {
  const { selectedTabId } = useTabContext();
  const isSelected = selectedTabId === id;
  return (
    isSelected && (
      <div>
        <p>{content}</p>
      </div>
    )
  );
};

export default Content;
