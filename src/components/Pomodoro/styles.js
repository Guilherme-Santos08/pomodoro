import styled from "styled-components";

export const Teste = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   color: white;

   background-color: #006466;
   height: 100vh;
   padding: 0 10px;

   .teste {
      background-color: #00303d;
      width: 677px;
      height: 472px;
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;

      header {
         background-color: #005066;
         display: flex;
         align-items: center;
         justify-content: space-around;

         border-radius: 8px;

         padding: 0 10px;
         height: 60px;

         li {
            font-size: 1.3rem;
            font-weight: bold;
            list-style: none;
            cursor: pointer;
         }
      }

      .counter {
         width: 423px;
         height: 240px;

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
            font-size: 90px;
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
            height: 240px;

            span {
               font-size: 70px;
            }
            button {
               width: 200px;
               height: 50px;
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
