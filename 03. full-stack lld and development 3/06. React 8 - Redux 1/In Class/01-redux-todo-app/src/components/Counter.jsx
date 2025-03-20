import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl ml-16 my-7">Counter: {count}</h1>
      <button
        className="p-3 m-3 rounded-lg border border-gray-400"
        onClick={() => dispatch(decrement())}
      >
        Decrememt
      </button>
      <button
        className="p-3 m-3 rounded-lg border border-gray-400"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
}
