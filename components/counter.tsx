import React from "react";
import useCounter from "~/lib/useCounter.ts";
import "./counter.css";

export default function Logo({ size = 75 }: { size?: number }) {
  const [count, increase, decrease] = useCounter();
  return (
    <div className="counter">
      <span>Counter:</span>
      <strong>{count}</strong>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
