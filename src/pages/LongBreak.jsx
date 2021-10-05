import Pomodoro from "../components/Pomodoro/Pomoro";
import { useTick } from "../hooks/useTick";

const LongBreak = ({ historys }) => {
  const { setMinutes } = useTick();
  setMinutes(15);
  return <Pomodoro historys={historys} whatThemeBackground={"longBreak"} />;
};

export default LongBreak;
