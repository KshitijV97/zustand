import { Middleware } from "@reduxjs/toolkit";

// Custom logging middleware
export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  const result = next(action);
  console.log("New state:", store.getState());
  return result;
};

// Async middleware example (similar to redux-thunk, but RTK includes thunk by default)
// This is just to demonstrate middleware creation
export const asyncMiddleware: Middleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};
