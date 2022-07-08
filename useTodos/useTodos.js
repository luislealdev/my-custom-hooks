import { useEffect, useReducer } from "react";
import {todoReducer} from './todoReducer'

export const useTodos = (initialConfig) => {

  const initialState = [...initialConfig];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, todosDispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };
    todosDispatch(action);
  };

  const handleDeleteTodo = (id) => {
    todosDispatch({
      type: "[TODO] delete todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    todosDispatch({
      type: "[TODO] toggle todo",
      payload: id,
    });
  };

  return {
    todos,
    pending: (todos.filter(todo => !todo.done)).length,
    complete: (todos.filter(todo => todo.done)).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
