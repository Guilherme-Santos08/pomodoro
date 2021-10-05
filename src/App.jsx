import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PomodoroPage from "./pages/PomodoroPage";
import ShortBreak from "./pages/ShortBreak";
import LongBreak from "./pages/LongBreak";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <PomodoroPage historys="short-break" />}
          />
          <Route
            path="/short-break"
            exact
            render={() => <ShortBreak historys="short-break" />}
          />
          <Route
            path="/long-break"
            exact
            render={() => <LongBreak historys="long-break" />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
