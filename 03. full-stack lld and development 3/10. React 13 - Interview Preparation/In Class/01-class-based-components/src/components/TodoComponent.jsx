import { useEffect, useState } from "react";

export default function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputvalue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTodos((todos) => [
        ...todos,
        "fuck vidhi",
        "make a baby with vidhi 👶",
        "fuck her again 🍼",
      ]);
    }, 1000);
  }, []);

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };

  const addNewTodo = () => {
    setTodos([...todos, inputValue]);
  };

  return (
    <div>
      <h1 className="text-xl">Get these Done</h1>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>

      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button className="p-2 bg-blue-50" onClick={addNewTodo}>
        Add todo
      </button>
    </div>
  );
}
