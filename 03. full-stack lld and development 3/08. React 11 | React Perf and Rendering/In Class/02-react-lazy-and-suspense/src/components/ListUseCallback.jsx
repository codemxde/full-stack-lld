import { useCallback, useState } from "react";

export default function ListUseCallback() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  const removeItem = useCallback((thisItem) => {
    setItems(items.filter((item) => item !== thisItem));
  });

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <div>{item}</div>
            <button onClick={() => removeItem(item)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
