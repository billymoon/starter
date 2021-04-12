import React from "react";
import useCounter from "~/lib/useCounter.ts";
import "./counter.css";

export default function Logo({ size = 75 }: { size?: number }) {
  const [count, isSyncing, increase, decrease] = useCounter();
  return (
    <div className="counter">
      <span>Counter:</span>
      {isSyncing && (
        <em>...{count}</em>
      )}
      {!isSyncing && (
        <strong>{count}</strong>
      )}
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
