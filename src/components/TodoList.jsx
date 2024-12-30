import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos, selectedTab, handleDeleteTodo, handleEditTodo } = props;

  const filteredTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filteredTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
};

export default TodoList;
