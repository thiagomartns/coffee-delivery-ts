import styled from "styled-components";

export const CoffeListContainer = styled.div`
  margin-top: 4rem;

  @media (min-width: 375px) and (max-width: 1000px) {
    margin-top: 2rem;
  }

  h1 {
    font: ${(props) => props.theme.typography["baloo-title-l"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};

    @media (min-width: 375px) and (max-width: 767px) {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;

export const CoffeListContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  flex-wrap: wrap;

  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    gap: 0;
  }
`;
