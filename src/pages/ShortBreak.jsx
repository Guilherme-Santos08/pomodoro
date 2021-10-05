import Pomodoro from "../components/Pomodoro/Pomoro";
import { useTick } from "../hooks/useTick";

const ShortBreak = ({ historys }) => {
  const { setMinutes } = useTick();
  setMinutes(5);
  return <Pomodoro historys={historys} whatThemeBackground={"shortBreak"} />;
};

export default ShortBreak;
