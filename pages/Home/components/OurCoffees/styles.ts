import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 6rem;
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

   @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas para tablets */
    column-gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas para tablets ou celulares grandes */
    column-gap: 1.25rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 coluna para celulares */
    column-gap: 1rem;
  }
`;
