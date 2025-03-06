import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the counter slice state
interface CounterState {
  value: number;
}

// Initial state
const initialState: CounterState = {
  value: 0,
};

// Create a slice with reducers
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Increment action
    increment: (state) => {
      // Redux Toolkit uses Immer under the hood
      // so we can "mutate" the state directly
      state.value += 1;
    },
    // Decrement action
    decrement: (state) => {
      state.value -= 1;
    },
    // Reset action
    reset: (state) => {
      state.value = 0;
    },
    // Increment by specific amount
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the action creators
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
