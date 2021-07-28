import Pomodoro from "../../components/Pomodoro/Pomoro";

const ShortBreak = ({ minutes, seconds, historys }) => {
   return (
      <Pomodoro
         minutes={minutes}
         seconds={seconds}
         historys={historys}
         whatThemeBackground={"shortBreak"}
      />
   );
};

export default ShortBreak;
