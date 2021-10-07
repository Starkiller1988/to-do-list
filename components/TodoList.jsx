import { useEffect, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./ToDoItem";

export const TodoList = () => {
  const [todos, setTodos] = useState(
    getItem("todos", [
      { id: 0, name: "Learn about components" },
      { id: 1, name: "Learn about props" },
      { id: 2, name: "Learn about state" },
    ])
  );

  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <TodoItem key={id} name={name} />
        ))}
      </ul>
      <CreateTodo
        onCreate={(name) => {
          setTodos([
            ...todos,
            {
              id: todos.length, // or todos.length
              name,
            },
          ]);
        }}
      />
    </>
  );
};
