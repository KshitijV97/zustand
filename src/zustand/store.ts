import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { counterStore } from "./counter-store";
import { todoStore } from "./todo-store";

// Combining multiple stores into one
type CombinedState = ReturnType<typeof counterStore> &
  ReturnType<typeof todoStore>;

// Create the combined store with middleware
export const useStore = create<CombinedState>()(
  // Apply middleware in a composable way
  devtools(
    persist(
      (...args) => ({
        // Spread the state and actions from individual stores
        ...counterStore(...args),
        ...todoStore(...args),
      }),
      {
        name: "zustand-store", // Storage key for localStorage
      }
    )
  )
);
