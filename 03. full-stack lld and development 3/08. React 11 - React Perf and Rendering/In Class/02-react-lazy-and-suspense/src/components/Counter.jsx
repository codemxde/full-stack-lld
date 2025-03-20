import { useState, memo } from "react";

const DisplayCount = memo(({ count }) => {
  console.log("I got called");
  return (
    <>
      <h1>Thiccness Count</h1>
      <p>Count: {count}</p>
    </>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <DisplayCount count={count} />
      <div className="flex gap-x-4">
        <button onClick={increment}>Increment</button>
        <button onClick={changeToggle}>Flip</button>
      </div>
    </>
  );
};

export default Counter;
