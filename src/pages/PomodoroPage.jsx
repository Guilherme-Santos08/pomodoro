import Pomodoro from "../components/Pomodoro/Pomoro";
import { useTick } from "../hooks/useTick";

const PomodoroPage = ({ historys }) => {
  const { setMinutes } = useTick();
  setMinutes(25);
  return <Pomodoro historys={historys} whatThemeBackground={"pomodoroPage"} />;
};

export default PomodoroPage;
