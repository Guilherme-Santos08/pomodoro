import { useEffect } from "react";
import { createContext, useState } from "react";
import { useHistory } from "react-router";

export const TickContext = createContext({});

export function TickContextProvider({ children }) {
  // https://codesandbox.io/s/pomodoro-361jf?file=/src/Pomodoro.js:756-880
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(false);

  const history = useHistory();

  const tick = () => {
    if (paused) return;
    else if (seconds === 0) {
      if (minutes !== 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        setDisplayMessage(!displayMessage);
      }
    } else {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    if (!paused) {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }
  });

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <TickContext.Provider
      value={{ timerMinutes, timerSeconds, paused, setPaused, setMinutes }}
    >
      {children}
    </TickContext.Provider>
  );
}
