import React from "react";

const TodoInput = () => {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter your todo" />
      <button>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
