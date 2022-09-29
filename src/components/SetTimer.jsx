import React, { useState } from "react";

function SetTimer({ handleStart, timeLeft }) {
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (time > 0) {
      handleStart(time);
      setTime("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {!timeLeft ? (
            <>
              <input
                type="number"
                value={time}
                max={99 * 60 * 60}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time in seconds"
              />{" "}
              <button type="submit">Start Timer</button>
            </>
          ) : (
            <button
              type="button"
              className="reset"
              onClick={() => {
                handleStart(null);
                setTime("");
              }}
            >
              Reset Timer
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SetTimer;
