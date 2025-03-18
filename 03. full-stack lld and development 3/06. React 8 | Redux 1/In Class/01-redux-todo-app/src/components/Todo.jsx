import { useSelector, useDispatch } from "react-redux";
import { updateText, addToList } from "../redux/todoSlice";

export default function Todo() {
  const { text, list } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  const addTodo = () => {
    dispatch(addToList());
  };

  return (
    <div>
      <h1 className="text-3xl text-amber-500 p-3">Todos</h1>
      <input
        type="text"
        value={text}
        placeholder="type your task here..."
        className="p-2"
        onChange={handleInputChange}
      />
      <button className="p-2 rounded-lg bg-blue-100" onClick={addTodo}>
        Add
      </button>
      <div>
        {list.map((task, index) => {
          return <div key={index}>{task}</div>;
        })}
      </div>
    </div>
  );
}
