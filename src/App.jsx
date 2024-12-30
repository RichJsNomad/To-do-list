import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  //const todos = [
  // { input: "Hello! Add your first todo!", complete: true },
  //  { input: "Watch React.js vids on youtube", complete: false },
  // { input: "Visit my aunt and bring a gift for her", complete: true },
  //  { input: "Finish my React.js project by 7 pm", complete: true },
  //];

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
    {
      input: "Hi",
      complete: false,
    },
  ]);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  }

  function handleEditTodo() {}

  function handleDeleteTodo() {}

  return (
    <>
      <Header todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
      <Tabs todos={todos} />

      <TodoList todos={todos} />
    </>
  );
}

export default App;
