import styled from "styled-components";
import introBackgroundImg from "../../../../assets/intro-background.png";
import { TitleText } from "../../../../components/Typography";
import { rgba } from "polished";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 480px) {
    height: 24rem;
    margin-top: 12rem;
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;

    > img {
        width: 22rem;
     }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;

  /* Ajuste no tamanho da fonte para telas menores */
  @media (max-width: 768px) {
    font-size: 2.75rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Colapsar em uma coluna para tablets e menores */
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 3rem; /* Ajustar o espaçamento superior para telas menores */
  }
`;
