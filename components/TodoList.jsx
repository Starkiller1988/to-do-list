import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  return (
    <ul>
      <ToDoItem name="Aufräumen" />
      <ToDoItem name="Coden üben" />
      <ToDoItem name="Sport machen" />
      <ToDoItem name="Essen kochen" />
    </ul>
  );
};
