import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Teste } from "./styles";

const Pomodoro = ({ minutes = 0, seconds = 0, historys }) => {
   let history = useHistory();
   const [paused, setPaused] = useState(true);
   const [[minute, second], setTime] = useState([minutes, seconds]);

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
   );
};

export default Pomodoro;
