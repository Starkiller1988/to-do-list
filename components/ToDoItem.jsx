import "./";

export const ToDoItem = ({ name }) => {
  const [isDone, setIsDone] = useState(false);
  const doneClick = () => {
    setIsDone(!isDone);
  };

  const doneToggle = isDone ? "todo done" : "todo";
  return (
    <li className={doneToggle} onClick={doneClick}>
      {name}
    </li>
  );
};
