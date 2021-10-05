import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./styles/ThemesPage";

import { ThemeProvider } from "styled-components";
import { TickContextProvider } from "./Context/context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TickContextProvider>
        <App />
      </TickContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
