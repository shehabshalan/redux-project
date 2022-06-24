import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
const Counter = () => {
  // useSelector is used to access the state
  // i want to take my (count) variable from my redux state (state.)
  // specifically my (state.counter) reducer and specifically the (count) variable that lives in that reducer aka slice (state.counter.count)
  const count = useSelector((state) => state.counter.count);
  // useDispatch is used to execute actions or send payloads
  const dispatch = useDispatch();

  const [incrementByValue, setIncrementByValue] = useState(0);

  const resetAll = () => {
    setIncrementByValue(0);
    dispatch(reset());
  };
  return (
    <section>
      <p> Current count is {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={resetAll}>reset</button>
        <input
          type="text"
          value={incrementByValue}
          onChange={(e) => setIncrementByValue(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementByValue) || 0))
          }
        >
          Add manually
        </button>
      </div>
    </section>
  );
};

export default Counter;
