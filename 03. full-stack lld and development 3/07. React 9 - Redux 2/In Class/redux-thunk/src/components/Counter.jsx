import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../redux/counterSlice";

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex p-3 gap-x-5 items-center">
      <button className="p-2" onClick={decrementCount}>
        −
      </button>
      <p className="text-xl text-blue-700 font-medium">{value}</p>
      <button className="p-2" onClick={incrementCount}>
        ＋
      </button>
    </div>
  );
}
