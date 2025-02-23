import { createContext } from "react";
import { TTodo } from "../types";

type TTodoContextProps = {
  todos: TTodo[];
  handleAddTodo: (newTodo: string) => void;
  handleDeleteTodo: (id: string) => void;
};

const TodoContext = createContext<TTodoContextProps | undefined>(undefined);

export default TodoContext;
