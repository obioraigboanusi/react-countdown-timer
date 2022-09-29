import React from "react";

function TimerItem({ time, tag }) {
  return (
    <div className="timer-item">
      <p className="timer-item-time">{time}</p>
      <p className="timer-item-text">{tag.toUpperCase()}</p>
    </div>
  );
}

export default TimerItem;
