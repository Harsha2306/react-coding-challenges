import React, { useState } from "react";
import ModalDialog from "./ModalDialog";

const MyPage: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleShowChange = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <h1>Home</h1>
      {!show && <button onClick={handleShowChange}>Show</button>}
      <ModalDialog
        show={show}
        handleShowChange={handleShowChange}
        title="Modal Dialog"
      >
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
      </ModalDialog>
    </div>
  );
};

export default MyPage;
