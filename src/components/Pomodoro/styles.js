import styled, { css } from "styled-components";

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

export const Teste = styled.div`
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
   
   display: flex;
   align-items: center;
   justify-content: center;

   color: white;

   /* background-color: #006466; */
   height: 100vh;
   padding: 0 0.625rem;

   transition: background-color .3s ease-in-out;

   .teste {
      /* background-color: #00303d; */
      width: 42.313rem;
      height: 29.5rem;
      border-radius: 8px;
      padding: 0.625rem;
      display: flex;
      flex-direction: column;

      header {
         /* background-color: #005066; */
         display: flex;
         align-items: center;
         justify-content: space-around;

         border-radius: 8px;

         padding: 0 0.625rem;
         height: 3.75rem;

         li,
         a {
            font-size: 1.3rem;
            font-weight: bold;
            list-style: none;
            cursor: pointer;
            color: white;
         }
      }

      .counter {
         width: 26.438rem;
         height: 15rem;

         border-radius: 8px;

         margin: auto;

         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;

         /* background-color: #005066; */

         .counter__info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
         }

         span {
            font-size: 5.625rem;
            font-weight: bold;
         }

         button {
            font-size: 1.5rem;
            font-weight: bold;
            text-transform: uppercase;
            color: white;

            width: 285px;
            height: 67px;

            margin-top: 20px;
            /* background-color: #00607a; */

            transform: scale(0.9);

            border: 2px solid black;
            border-radius: 8px;

            cursor: pointer;
         }
      }

      @media (max-width: 450px) {
         header {
            li {
               font-size: 1rem;
            }
         }
         .counter {
            width: 100%;
            height: 15rem;

            span {
               font-size: 4.375rem;
            }
            button {
               width: 200px;
               height: 3.125rem;
               font-size: 1.3rem;
            }
         }
      }
      @media (max-width: 360px) {
         header {
            li {
               font-size: 0.8rem;
            }
         }
      }
   }
`;
