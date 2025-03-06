import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import todoReducer from "./slices/todo-slice";
import { loggerMiddleware } from "./middleware";

// Configure the Redux store with multiple reducers and middleware
export const store = configureStore({
  // Combine multiple reducers
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
  // Add custom middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  // Enable Redux DevTools
  devTools: true,
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
