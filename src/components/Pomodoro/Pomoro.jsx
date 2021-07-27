import { useEffect, useState } from "react";
import { Teste } from "./styles";

const Pomodoro = ({ minutes = 0, seconds = 0 }) => {
   const [paused, setPaused] = useState(true);
   const [[minute, second], setTime] = useState([minutes, seconds]);

   const tick = () => {
      if (paused) return;
      else if (second === 0) {
         return;
      } else {
         setTime([minute, second - 1]);
      }
   };

   useEffect(() => {
      if (paused === false) {
         const timerID = setInterval(() => tick(), 1000);
         return () => clearInterval(timerID);
      }
   });

   return (
      <Teste>
         <div className="teste">
            <header>
               <li>Pomodoro</li>
               <li>Short Break</li>
               <li>Long Break</li>
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
   );
};

export default Pomodoro;
