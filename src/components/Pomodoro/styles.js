import styled from "styled-components";

export const Teste = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   color: white;

   background-color: #006466;
   height: 100vh;
   padding: 0 0.625rem;

   .teste {
      background-color: #00303d;
      width: 42.313rem;
      height: 29.5rem;
      border-radius: 8px;
      padding: 0.625rem;
      display: flex;
      flex-direction: column;

      header {
         background-color: #005066;
         display: flex;
         align-items: center;
         justify-content: space-around;

         border-radius: 8px;

         padding: 0 0.625rem;
         height: 3.75rem;

         li,a {
            font-size: 1.3rem;
            font-weight: bold;
            list-style: none;
            cursor: pointer;
            text-decoration: none;
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

         background-color: #005066;

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
            background-color: #00607a;

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
