import Pomodoro from "../Pomodoro/Pomoro";

const ShortBreak = ({minutes, seconds, historys}) => {
   return <Pomodoro minutes={minutes} seconds={seconds} historys={historys} />;
};

export default ShortBreak;
