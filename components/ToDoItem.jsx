import { useState } from "react";
import "./ToDoItem.css";
import herberttwo from "../src/media/dont-make-me-beg.mp3";
import herbertone from "../src/media/herbert_ymca.mp3";

export const ToDoItem = ({ name }) => {
  r;
  const [isDone, setIsDone] = useState(false);
  const doneClick = () => {
    setIsDone(!isDone);
    isDone ? new Audio(herbertone).play() : new Audio(herberttwo).play();
  };

  const doneToggle = isDone ? "todo done" : "todo";
  return (
    <li className={doneToggle} onClick={doneClick}>
      {name}
    </li>
  );
};
