import styled from "styled-components";

export const Teste = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   color: white;

   background-color: #006466;
   height: 100vh;
   padding: 0 10px;

   div {
      background-color: #00303d;
      width: 677px;
      height: 472px;
      border-radius: 8px;
      padding: 10px;

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

      @media (max-width: 425px) {
         header {
            li {
               font-size: 1rem;
            }
         }
      }
   }
`;
