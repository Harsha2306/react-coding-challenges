import React, { ReactNode, useState } from "react";
import TodoContext from "../../context/TodoContext";
import { TTodo } from "../../types";
import { v4 as uuidv4 } from "uuid";

type TTodoContextProviderProps = {
  children: ReactNode;
};

const TodoContextProvider: React.FC<TTodoContextProviderProps> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const handleAddTodo = (newTodo: string) => {
    setTodos((prev) => [...prev, { id: uuidv4(), description: newTodo }]);
  };
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo_) => todo_.id !== id));
  };
  return (
    <TodoContext.Provider value={{ todos, handleAddTodo, handleDeleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
