import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShortBreak from "./pages/ShortBreak/ShortBreak";
import LongBreak from "./pages/LongBreak/LongBreak";
import PomodoroPage from "./pages/PomodoroPage/PomodoroPage";

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
                     <PomodoroPage
                        minutes={25}
                        seconds={0}
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
