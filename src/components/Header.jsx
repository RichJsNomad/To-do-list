import React from "react";

const Header = (props) => {
  const { todos } = props;
  const todosLength = todos.length;

  const isTasksPlural = todos.length != 1;

  const taskOrTasks = isTasksPlural ? "tasks" : "task";

  return (
    <header className="text-gradient">
      <h1>
        You have {todosLength} open {isTasksPlural}
      </h1>
    </header>
  );
};

export default Header;
