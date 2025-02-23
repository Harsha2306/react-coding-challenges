import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoContextProvider from "./TodoContextProvider";

const TodoApp: React.FC = () => {
  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
  );
};

export default TodoApp;
