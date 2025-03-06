import { StateCreator } from "zustand";
import { Todo } from "../types/common";
import { produce } from "immer"; // Optional: Use Immer for easier state updates

// Define the todo slice's state and actions
export interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  clearCompleted: () => void;
}

// Create a store slice for the todo feature
export const todoStore: StateCreator<TodoState> = (set) => ({
  todos: [],

  // Add a new todo
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),

  // Toggle a todo's completed status (using Immer for direct mutation)
  toggleTodo: (id) =>
    set(
      produce((state: TodoState) => {
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      })
    ),

  // Remove a todo
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // Clear all completed todos
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
});
