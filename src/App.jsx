import Pomodoro from "./components/Pomodoro/Pomoro";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShortBreak from "./components/ShortBreak/ShortBreak";
import LongBreak from "./components/LongBreak/LongBreak";

function App() {
   return (
      <>
         <Router>
            <GlobalStyle />
            <Switch>
               <Route
                  path="/"
                  exact
                  render={() => (
                     <Pomodoro
                        minutes={0}
                        seconds={5}
                        historys={"short-break"}
                     />
                  )}
               />
               <Route path="/short-break" exact>
                  <ShortBreak minutes={5} seconds={0} historys={"/"} />
               </Route>
               <Route path="/long-break" exact>
                  <LongBreak minutes={15} seconds={0} historys={"/"} />
               </Route>
            </Switch>
         </Router>
      </>
   );
}

export default App;
