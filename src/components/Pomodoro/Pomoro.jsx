import { Teste } from "./styles";

const Pomodoro = () => {
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
                  <span>24:59</span>
                  <button>Start</button>
                  {/* Criar um ternario, quando o counter estiver ativo, a menssagem muda pra "Stop"*/}
               </div>
            </div>
         </div>
      </Teste>
   );
};

export default Pomodoro;
