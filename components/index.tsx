import React from "react";
import { decrement, increment, incrementAsync } from "../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment async"
          onClick={() => dispatch(incrementAsync(1))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
