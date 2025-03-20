import { useState } from "react";
import stateAndCity from "../constants/stateAndCity";
import { useCallback } from "react";
import { useMemo } from "react";

export default function Dropwdown() {
  const [state, setState] = useState(Object.keys(stateAndCity)[0]);

  const states = useMemo(() => Object.keys(stateAndCity), []);

  const selectState = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="p-3 m-7 flex flex-col items-center shadow-md bg-blue-100 w-1/5 min-w-[290px] h-full rounded-lg">
      <h1 className="text-lg font-medium my-4">State and City</h1>
      <div className="flex flex-col gap-y-7 my-4 w-[60%]">
        <select
          className="text-center rounded-lg h-[1.75rem]"
          name=""
          id=""
          onChange={selectState}
        >
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select className="text-center rounded-lg h-[1.75rem]" name="" id="">
          {Array.isArray(stateAndCity[state]) ? (
            stateAndCity[state].map((city, index) => {
              return (
                <option key={index} value={city}>
                  {city}
                </option>
              );
            })
          ) : (
            <option value={stateAndCity[state]}>{stateAndCity[state]}</option>
          )}
        </select>
      </div>
    </div>
  );
}
