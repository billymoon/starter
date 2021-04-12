import { useCallback, useEffect, useState } from "react";

export default function useCounter(): [
  number,
  boolean,
  () => void,
  () => void,
] {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((n) => n + 1);
  }, []);
  const decrease = useCallback(() => {
    setCount((n) => n - 1);
  }, []);

  return [count, increase, decrease];
}
