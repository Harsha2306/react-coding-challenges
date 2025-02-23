import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const useTodoContext = () => {
  const todoContext = useContext(TodoContext);
  if (!todoContext)
    throw new Error("todo context must be used inside todocontext provider");
  return todoContext;
};

export default useTodoContext;
