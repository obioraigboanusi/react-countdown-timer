import React, { useEffect, useState } from "react";
import SetTimer from "./SetTimer";
import TimerItem from "./TimerItem";

const appendZero = (num) => {
  return num < 10 ? "0" + num : num;
};

function CountDown({ seconds, handleStart }) {
  const [timeLeft, setTimeLeft] = useState(seconds || 0);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (seconds) {
      setTimeLeft(seconds);
      const intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      setId(intervalId);
    } else {
      setTimeLeft(0);
    }
    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(id);
    }
  }, [timeLeft, id]);

  const hours = Math.floor(timeLeft / 60 / 60);
  const minutes = Math.floor((timeLeft - hours * 60 * 60) / 60);
  const ss = Math.floor(timeLeft - hours * 60 * 60 - minutes * 60);

  return (
    <>
      <SetTimer handleStart={handleStart} timeLeft={timeLeft} />
      <div>
        <TimerItem time={appendZero(hours)} tag="Hours" />:
        <TimerItem time={appendZero(minutes)} tag="Minutes" />:
        <TimerItem time={appendZero(ss)} tag="Seconds" />
      </div>
    </>
  );
}

export default CountDown;
