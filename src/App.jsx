import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { input: "Привет, напиши первую задачу!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
  }

  return (
    <>
      <Header todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />

      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
    </>
  );
}

export default App;
