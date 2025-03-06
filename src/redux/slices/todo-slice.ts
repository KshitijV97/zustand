import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types/common";

// Define the todos slice state
interface TodosState {
  items: Todo[];
}

// Initial state
const initialState: TodosState = {
  items: [],
};

// Create a slice with reducers
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    // Toggle todo completion status
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Remove a todo
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Clear completed todos
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.completed);
    },
  },
});

// Export the action creators
export const { addTodo, toggleTodo, removeTodo, clearCompleted } =
  todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;
