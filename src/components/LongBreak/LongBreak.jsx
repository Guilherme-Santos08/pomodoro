import Pomodoro from "../Pomodoro/Pomoro";

const LongBreak = ({ minutes, seconds, historys }) => {
   return <Pomodoro minutes={minutes} seconds={seconds} historys={historys} />;
};

export default LongBreak;
