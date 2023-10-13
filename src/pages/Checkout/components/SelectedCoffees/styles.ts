import styled from "styled-components";

export const SelectedCoffees = styled.div``;

export const SelectedCoffeesStats = styled.div`
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 40px;
  border-radius: 6px 44px;

  @media (min-width: 375px) and (max-width: 1200px) {
    padding: 40px 80px;
  }

  .totalPayment {
    display: flex;
    flex-direction: column;
  }

  .itemsSelected {
    display: flex;
    flex-direction: column;
    .coffeItemBought {
      display: flex;
      justify-content: space-between;
      margin: 2.75rem 0;
      .stats {
        display: flex;
        gap: 1rem;
        img {
          width: 20%;
        }

        p {
          font: ${(props) => props.theme.typography["roboto-r-text-m"]};
          color: ${(props) => props.theme.colors["base-subtitle"]};
          text-transform: capitalize;
        }
      }

      h3 {
        font: ${(props) => props.theme.typography["roboto-b-text-m"]};
        color: ${(props) => props.theme.colors["base-text"]};
      }
    }
  }
`;

export const Title = styled.h1`
  font: ${(props) => props.theme.typography["baloo-title-xs"]};
  color: ${(props) => props.theme.colors["base-subtitle"]};
  margin-bottom: 1rem;
`;

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  p {
    font: ${(props) => props.theme.typography["roboto-text-s"]};
    color: ${(props) => props.theme.colors["base-text"]};
  }

  h3 {
    font: ${(props) => props.theme.typography["roboto-b-text-l"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.yellow};
  font: ${(props) => props.theme.typography["button-g"]};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 6px;
  border-color: transparent;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors["yellow-dark"]};
    transition: background-color 0.3s ease;
  }

  &:disabled {
    opacity: 0.6;

    &:hover {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.colors["yellow"]};
    }
  }
`;
