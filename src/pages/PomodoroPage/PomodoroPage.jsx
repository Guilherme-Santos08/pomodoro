import Pomodoro from "../../components/Pomodoro/Pomoro";

const PomodoroPage = ({ minutes, seconds, historys }) => {
   return (
      <Pomodoro
         minutes={minutes}
         seconds={seconds}
         historys={historys}
         whatThemeBackground={"pomodoroPage"}
      />
   );
};

export default PomodoroPage;
