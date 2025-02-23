import React, { useState } from "react";
import useTodoContext from "../../hooks/useTodoContext";

const INITIAL_STATE = "";

const TodoForm = () => {
  const [description, setDescription] = useState(INITIAL_STATE);
  const { handleAddTodo } = useTodoContext();
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(description);
    setDescription(INITIAL_STATE);
  };
  console.log("form");
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        value={description}
        onChange={(e) => handleDescriptionChange(e)}
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
