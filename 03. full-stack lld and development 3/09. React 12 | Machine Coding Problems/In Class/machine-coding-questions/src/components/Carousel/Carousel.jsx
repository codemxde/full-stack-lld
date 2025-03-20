import { useState } from "react";
import items from "../../constants/constants";

export default function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);

  const nextImage = () => {
    if (currentItem === items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem + 1);
    }
  };

  const previousImage = () => {
    if (currentItem === 0) {
      setCurrentItem(items.length - 1);
    } else {
      setCurrentItem(currentItem - 1);
    }
  };

  return (
    <div className="w-[400px] bg-yellow-50 m-7 p-2 rounded-lg shadow-lg flex flex-col items-center">
      <div
        className="rounded-lg bg-center bg-cover w-full h-[300px] relative"
        style={{ backgroundImage: `url(${items[currentItem].imageUrl})` }}
      >
        <div className="w-full flex justify-between absolute bottom-0">
          <button
            className="text-4xl font-bold p-3 px-5 rounded-lg text-white"
            onClick={previousImage}
          >
            {"<"}
          </button>
          <button
            className="text-4xl font-bold p-3 px-5 rounded-lg text-white"
            onClick={nextImage}
          >
            {">"}
          </button>
        </div>
      </div>
      <h1 className="text-xl text-center underline p-2">{items[currentItem].title}</h1>
      <p className="text-center text-lg">{items[currentItem].description}</p>
    </div>
  );
}
