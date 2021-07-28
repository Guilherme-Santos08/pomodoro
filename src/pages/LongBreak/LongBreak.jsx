import Pomodoro from "../../components/Pomodoro/Pomoro";

const LongBreak = ({ minutes, seconds, historys }) => {
   return (
      <Pomodoro
         minutes={minutes}
         seconds={seconds}
         historys={historys}
         whatThemeBackground={"longBreak"}
      />
   );
};

export default LongBreak;
