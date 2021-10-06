import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToDoList } from "../components/TodoList";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <h1>Hello</h1>
    <ToDoList />
    </div>
  );
}

export default App;
