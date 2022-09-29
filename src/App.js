import { useState } from "react";
import CountDown from "./components/CountDown";
import Header from "./components/Header";

function App() {
  const [seconds, setSeconds] = useState(0);
  const handleStart = (time) => {
    setSeconds(time);
  };
  return (
    <div className="container">
      <Header />
      <div className="app">
        <CountDown seconds={seconds} handleStart={handleStart} />
      </div>
    </div>
  );
}

export default App;
