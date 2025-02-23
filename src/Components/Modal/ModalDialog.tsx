import React, { ReactNode } from "react";

type TModalDialogProps = {
  title: string;
  children: ReactNode;
  show: boolean;
  handleShowChange: () => void;
};

const ModalDialog: React.FC<TModalDialogProps> = ({
  title,
  children,
  show,
  handleShowChange,
}) => {
  return (
    show && (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "500px",
          border: "1px solid black",
        }}
      >
        <h1>{title}</h1>
        <div>{children}</div>
        <button
          style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
          onClick={handleShowChange}
        >
          close
        </button>
      </div>
    )
  );
};

export default ModalDialog;
