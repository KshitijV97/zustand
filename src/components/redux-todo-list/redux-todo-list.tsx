import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addTodo,
  toggleTodo,
  removeTodo,
  clearCompleted,
} from "../../redux/slices/todo-slice";
import { Todo } from "../../types";

export const ReduxTodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");

  // Get todos from Redux store
  const todos = useSelector((state: RootState) => state.todos.items);
  
  // Get dispatch function
  const dispatch = useDispatch();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div className="todo-list">
      <h3>Redux Todo List ({todos.length})</h3>

      <form onSubmit={handleAddTodo}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.some((todo: Todo) => todo.completed) && (
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default ReduxTodoList;
