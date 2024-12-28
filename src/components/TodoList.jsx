import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;

  const tab = "All";

  const filteredTodosList = todos.filter((val) => {
    if (tab === "All") return true;
    if (tab === "Completed") return val.complete;
    if (tab === "Open") return !val.complete;
    return false;
  });

  return (
    <>
      {filteredTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />;
      })}
    </>
  );
};

export default TodoList;
