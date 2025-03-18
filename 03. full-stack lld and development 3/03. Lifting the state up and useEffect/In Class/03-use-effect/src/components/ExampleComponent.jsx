import { useState, useEffect } from "react";

export default function ExampleComponent() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => setCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times </p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
