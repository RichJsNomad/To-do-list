import React from "react";

const TodoCard = (props) => {
  const { todoIndex, todo, handleDeleteTodo, handleEditTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleEditTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button>
          <h6
            onClick={() => {
              handleDeleteTodo(todoIndex);
            }}
          >
            Delete
          </h6>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
