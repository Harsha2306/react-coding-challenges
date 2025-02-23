import React from "react";
import useTodoContext from "../../hooks/useTodoContext";

type TTodoItemProps = {
  id: string;
  description: string;
};

const TodoList = () => {
  const { todos } = useTodoContext();
  console.log("list");
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

const TodoItem: React.FC<TTodoItemProps> = ({ id, description }) => {
  const { handleDeleteTodo } = useTodoContext();
  const handleButtonClick = () => handleDeleteTodo(id);
  return (
    <>
      <li>{description}</li>
      <button onClick={handleButtonClick}>Delete</button>
    </>
  );
};

export default TodoList;
