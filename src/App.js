import Pomodoro from "./components/Pomodoro/Pomoro";
import GlobalStyle from "./styles/GlobalStyle"

function App() {
  return (
    <>
    <GlobalStyle />
    <Pomodoro minutes={0} seconds={5}/>
    </>
  );
}

export default App;
