import { css, createGlobalStyle } from "styled-components";

export const theme = {
   backgrounds: {
      cyan: "#006466",
      purble: "#3A015C",
      blue: "#023E8A",
   },
   headers: {
      cyan: "#005066",
      purble: "#480CA8",
      blue: "#0077B6",
   },
   seconday: {
      cyan: "#00303D",
      purble: "#190028",
      blue: "#03045E",
   },
   button: {
      cyan: "#00607A",
      purble: "#3A0CA3",
      blue: "#1A659E",
   },
};

export const ThemesPage = createGlobalStyle`
   ${(props) =>
      props.whatThemeBackground === "shortBreak" &&
      css`
         background: ${(props) => props.theme.backgrounds.purble};

         header {
            background-color: ${(props) => props.theme.headers.purble};
         }

         .teste {
            background-color: ${(props) => props.theme.seconday.purble};
         }

         .counter {
            background-color: ${(props) => props.theme.headers.purble};
         }

         button {
            background-color: ${(props) => props.theme.button.purble};
         }
      `}

   ${(props) =>
      props.whatThemeBackground === "longBreak" &&
      css`
         background: ${(props) => props.theme.backgrounds.blue};

         header {
            background-color: ${(props) => props.theme.headers.blue};
         }

         .teste {
            background-color: ${(props) => props.theme.seconday.blue};
         }

         .counter {
            background-color: ${(props) => props.theme.headers.blue};
         }

         button {
            background-color: ${(props) => props.theme.button.blue};
         }
      `}
   
${(props) =>
      props.whatThemeBackground === "pomodoroPage" &&
      css`
         background: ${(props) => props.theme.backgrounds.cyan};

         header {
            background-color: ${(props) => props.theme.headers.cyan};
         }

         .teste {
            background-color: ${(props) => props.theme.seconday.cyan};
         }

         .counter {
            background-color: ${(props) => props.theme.headers.cyan};
         }

         button {
            background-color: ${(props) => props.theme.button.cyan};
         }
      `}
`;
