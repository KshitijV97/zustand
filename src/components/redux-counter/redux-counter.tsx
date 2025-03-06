import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../../redux/slices/counter-slice";

export const ReduxCounter: React.FC = () => {
  // Get state from Redux store
  const count = useSelector((state: RootState) => state.counter.value);
  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h3>Redux Counter: {count}</h3>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      </div>
    </div>
  );
};
