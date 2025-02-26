import React, { useEffect, useState } from "react";

type Time = {
  mins: number;
  secs: number;
};

const initialState: Time = {
  mins: 0,
  secs: 0,
};

const StopWatch: React.FC = () => {
  const [time, setTime] = useState<Time>(initialState);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      const timer = setInterval(() => {
        setTime((prev) => {
          if (prev.secs === 59) return { mins: prev.mins + 1, secs: 0 };
          return { ...prev, secs: prev.secs + 1 };
        });
      }, 10);
      return () => clearInterval(timer);
    }
  }, [flag]);

  const handleStart = () => {
    setFlag(true);
  };

  const handleStop = () => {
    setFlag(false);
  };

  const handleReset = () => {
    setTime(initialState);
    setFlag(false);
  };

  return (
    <div>
      <p>
        {time.mins}:{time.secs < 10 ? `0${time.secs}` : time.secs}
      </p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default StopWatch;
