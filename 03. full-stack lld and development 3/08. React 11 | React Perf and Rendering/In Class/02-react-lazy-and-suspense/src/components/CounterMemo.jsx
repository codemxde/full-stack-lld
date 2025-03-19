import { useState, useMemo } from "react";

const createLargeArr = () => {
  console.log("generating large array");
  console.time("Array Generation");
  const arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i);
  }
  console.timeEnd("Array Generation");
  return arr;
};

const calcSum = (arr) => {
  console.time("Accumulating");
  const value = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.timeEnd("Accumulating");

  return value;
};

export default function CounterMemo() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const largeArray = useMemo(() => createLargeArr(), []);
  const sum = useMemo(() => calcSum(largeArray), [largeArray]);

  return (
    <>
      <h1>SEEYUHH 🗣️</h1>
      <p>Sum: {sum}</p>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </>
  );
}
