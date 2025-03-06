import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// Define the state interface
interface ExampleState {
  bears: number;
  fish: number;
  addBear: () => void;
  eatFish: () => void;
  clearAllBears: () => void;
}

// Create a store with multiple middleware examples
export const useExampleStore = create<ExampleState>()(
  // First middleware: devtools for Redux DevTools integration
  devtools(
    // Second middleware: persist for localStorage persistence
    persist(
      // Third middleware: immer for easier state mutations
      immer((set) => ({
        bears: 0,
        fish: 100,

        // Actions can directly mutate state when using immer
        addBear: () =>
          set((state) => {
            state.bears += 1;
          }),

        // Actions can include multiple mutations
        eatFish: () =>
          set((state) => {
            if (state.fish > 0) {
              state.fish -= 1;
              // Bear gets bigger after eating
              state.bears += 0.1;
            }
          }),

        // Reset action
        clearAllBears: () => set({ bears: 0 }),
      })),
      {
        name: "example-storage", // Storage key
        storage: createJSONStorage(() => localStorage), // Storage adapter (localStorage by default)
        partialize: (state) => ({ bears: state.bears }), // Only persist the bears count
      }
    )
  )
);
