import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "../components/TodoList";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <h1>Hello</h1>
    <TodoList />
    </div>
  );
}

export default App;
