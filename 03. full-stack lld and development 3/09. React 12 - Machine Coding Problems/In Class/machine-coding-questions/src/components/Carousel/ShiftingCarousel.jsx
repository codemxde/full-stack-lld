import { useEffect, useRef, useState } from "react";
import items from "../../constants/constants";

export default function ShiftingCarousel() {
  const [currentItem, setCurrentItem] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-[400px] bg-indigo-50 m-7 p-2 rounded-lg shadow-lg flex flex-col items-center">
      <div
        className="rounded-lg bg-center bg-cover w-full h-[300px] relative"
        style={{ backgroundImage: `url(${items[currentItem].imageUrl})` }}
      ></div>
      <h1 className="text-xl text-center underline p-2">{items[currentItem].title}</h1>
      <p className="text-center text-lg">{items[currentItem].description}</p>
    </div>
  );
}
