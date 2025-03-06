import React from "react";
import { useStore } from "../../zustand/store";

export const ZustandCounter: React.FC = () => {
  // Zustand allows selecting only the state you need
  // This component will only re-render when count changes
  const { count, increment, decrement, reset, incrementBy } = useStore();

  return (
    <div className="counter">
      <h3>Zustand Counter: {count}</h3>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => incrementBy(10)}>+10</button>
      </div>
    </div>
  );
};
