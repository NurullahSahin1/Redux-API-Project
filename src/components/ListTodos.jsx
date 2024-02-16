import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  const state = useSelector((store) => store.todoReducer);
  console.log(state);

  return (
    <div>
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
