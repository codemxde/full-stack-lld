import { useEffect, useRef, useState, useCallback } from "react";

export default function AdvancedTimer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const seconds = `0${time % 60}`.slice(-2);
  const minutes = `0${Math.floor(time / 60)}`.slice(-2);
  const hours = `0${Math.floor(time / 3600)}`.slice(-2);

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => setTime(prevTime + 1));
    }, 1000);
  });

  const stopTimer = useCallback(() => {
    clearInterval(intervalRef.current);
  });

  const restart = useCallback(() => {
    setTime(0);
    clearInterval(intervalRef.current);
  });

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="m-5 ml-24 w-[25%] min-w-[350px] h-[22vh] min-h-[180px] flex flex-col justify-between items-center min-h-[150px] p-3 bg-fuchsia-100 rounded-lg shadow-md">
      <div className="flex gap-x-1 hover:scale-105 duration-300">
        <h1 className="font-bold text-2xl text-rose-600 underline">Advanced Stopwatch</h1>
        <span className="text-2xl">⏰</span>
      </div>

      <div className="flex gap-x-4 items-baseline">
        <p className="text-xl font-medium">{hours} HH</p>
        <span className="text-2xl">:</span>
        <p className="text-xl font-medium">{minutes} MM</p>
        <span className="text-2xl">:</span>
        <p className="text-xl font-medium">{seconds} SS</p>
      </div>
      <div className="flex gap-x-12">
        <button
          className="p-2 px-3 bg-amber-300 rounded-lg hover:bg-purple-400"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="p-2 px-3 bg-amber-300 rounded-lg hover:bg-purple-400"
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          className="p-2 bg-amber-300 rounded-lg hover:bg-purple-400"
          onClick={restart}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
