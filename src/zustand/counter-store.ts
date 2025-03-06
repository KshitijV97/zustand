import { StateCreator } from "zustand";

// Define the counter slice's state and actions
export interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (value: number) => void;
}

// Create a store slice for the counter feature
export const counterStore: StateCreator<CounterState> = (set) => ({
  count: 0,
  // Simple action to increment count
  increment: () => set((state) => ({ count: state.count + 1 })),
  // Simple action to decrement count
  decrement: () => set((state) => ({ count: state.count - 1 })),
  // Reset the counter to 0
  reset: () => set({ count: 0 }),
  // Increment by a specific value
  incrementBy: (value) => set((state) => ({ count: state.count + value })),
});
