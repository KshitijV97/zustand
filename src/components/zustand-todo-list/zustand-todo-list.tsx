import React, { useState } from "react";
import { useStore } from "../../zustand/store";

export const ZustandTodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");

  // Destructure only the todos and actions we need
  const { todos, addTodo, toggleTodo, removeTodo, clearCompleted } = useStore();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="todo-list">
      <h3>Zustand Todo List ({todos.length})</h3>

      <form onSubmit={handleAddTodo}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {todos.some((todo) => todo.completed) && (
        <button onClick={clearCompleted}>Clear Completed</button>
      )}
    </div>
  );
};

export default ZustandTodoList;
