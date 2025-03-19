import { useEffect, useRef, useState, useCallback } from "react";

export default function Timer() {
  const timerInterval = useRef(null);

  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const startTimer = useCallback(() => {
    setTime(Date.now());
    setStartTime(Date.now());

    timerInterval.current = setInterval(() => {
      console.log("hi");
      setTime(Date.now());
    }, 100);
  });

  const stopTimer = useCallback(() => {
    clearInterval(timerInterval.current);
  });

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  let timePassed = (time - startTime) / 1000;

  return (
    <div className="m-5 w-1/5 min-w-[300px] h-[20vh] flex flex-col justify-between items-center min-h-[150px] p-3 bg-blue-100 rounded-lg shadow-md">
      <h1 className="font-bold text-2xl text-indigo-700">Stopwatch ⏰</h1>
      <p className="text-xl font-medium text-orange-600">{timePassed.toFixed(3)}s</p>
      <div className="flex gap-x-7">
        <button
          className="p-2 bg-amber-300 rounded-lg hover:bg-purple-400"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="p-2 bg-amber-300 rounded-lg hover:bg-purple-400"
          onClick={stopTimer}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
