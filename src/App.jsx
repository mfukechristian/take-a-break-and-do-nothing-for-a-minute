import React, { useState, useEffect } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsComplete(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const resetTimer = () => {
    setTimeLeft(60);
    setIsComplete(false);
  };

  return (
    <div className="app-container">
      <div className="content-container">
        {!isComplete && (
          <div className="timer-container">
            <h1 className="title">Take a pause and do nothing</h1>
            <p className="timer">{formatTime(timeLeft)}</p>
          </div>
        )}

        {isComplete && (
          <div className="complete-container">
            <h2 className="complete-title">That wasn't so bad, was it?</h2>
            <button onClick={resetTimer} className="reset-button">
              Take a Pause Again?
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
