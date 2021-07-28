/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Teste } from "./styles";
import { theme, ThemesPage } from "../../styles/ThemesPage";

import { ThemeProvider } from "styled-components";

const Pomodoro = ({
   minutes = 0,
   seconds = 0,
   historys,
   whatThemeBackground,
}) => {
   let history = useHistory();
   const [paused, setPaused] = useState(true);
   const [[minute, second], setTime] = useState([minutes, seconds]);
   const [count, setCount] = useState(0)
   console.log(count);

   const tick = () => {
      if (paused) return;
      else if (second === 0) {
         setTime([minute - 1, 59]);
      } else {
         setTime([minute, second - 1]);
      }
      if (minute === 0 && second === 0) {
         setTime([0, 0]);
         history.push(historys);
         setCount(count + 1)
      }
   };

   useEffect(() => {
      count === 7 && history.push("/long-break")
      if(count === 5) {
         setCount(0)
      }
   }, [count])

   useEffect(() => {
      if (paused === false) {
         const timerID = setInterval(() => tick(), 1000);
         return () => clearInterval(timerID);
      }
   });

   return (
      <ThemeProvider theme={theme}>
         <ThemesPage />
            <Teste whatThemeBackground={whatThemeBackground}>
               <div className="teste">
                  <header>
                     <Link to="/">
                        <li>Pomodoro</li>
                     </Link>
                     <Link to="/short-break">
                        <li>Short Break</li>
                     </Link>
                     <Link to="/long-break">
                        <li>Long Break</li>
                     </Link>
                  </header>
                  <div className="counter">
                     <div className="counter__info">
                        <span>
                           {`${minute.toString().padStart(2, "0")}:${second
                              .toString()
                              .padStart(2, "0")}`}
                        </span>
                        <button onClick={() => setPaused(!paused)}>
                           {paused ? "Start" : "Pause"}
                        </button>
                        {/* Criar um ternario, quando o counter estiver ativo, a menssagem muda pra "Stop"*/}
                     </div>
                  </div>
               </div>
            </Teste>
      </ThemeProvider>
   );
};

export default Pomodoro;
