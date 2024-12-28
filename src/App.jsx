import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const todos = [
    { input: "Hello! Add your first todo!", complete: true },
    { input: "Watch React.js vids on youtube", complete: true },
    { input: "Visit my aunt and bring a gift for her", complete: false },
    { input: "Finish my React.js project by 7 pm", complete: false },
  ];
  return (
    <>
      <Header todos={todos} />
      <TodoInput todos={todos} />
      <Tabs todos={todos} />

      <TodoList todos={todos} />
    </>
  );
}

export default App;
