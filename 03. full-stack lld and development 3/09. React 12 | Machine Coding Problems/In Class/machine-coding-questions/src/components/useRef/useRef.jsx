import { useEffect, useRef } from "react";

export default function FocusInput() {
  const element = useRef(null);

  const focusElement = () => {
    element.current.focus();
  };

  useEffect(() => {
    focusElement();
  }, []);

  return (
    <div className="flex gap-x-7">
      <input className="bg-red-200 rounded-xl" ref={element} type="text" />
      <button className="bg-green-200 p-3 rounded-lg" onClick={focusElement}>
        Focus Input
      </button>
    </div>
  );
}
