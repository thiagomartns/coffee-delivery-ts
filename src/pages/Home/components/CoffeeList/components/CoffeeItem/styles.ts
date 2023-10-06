import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 2rem;
  gap: 1.25rem;
  width: 256px;
  height: 410px;

  @media (min-width: 767px) and (max-width: 1400px) {
    flex: 1;
  }

  img {
    width: 120px;
    height: 120px;
  }

  .badgeContainer {
    display: flex;
    gap: 0.75rem;

    .badge {
      background-color: ${(props) => props.theme.colors["yellow-light"]};
      padding: 4px 8px;
      border-radius: 100px;
      display: flex;

      h3 {
        color: ${(props) => props.theme.colors["yellow-dark"]};
        font: ${(props) => props.theme.typography.tag};
        text-transform: uppercase;
      }
    }
  }

  h2 {
    font: ${(props) => props.theme.typography["baloo-title-s"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
    text-align: center;
    text-transform: capitalize;
  }

  p {
    font: ${(props) => props.theme.typography["roboto-text-s"]};
    color: ${(props) => props.theme.colors["base-label"]};
    text-align: center;
    height: 3rem;
    width: 20ch;
    /* margin-bottom: 1rem; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .price-and-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

    .price {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      span {
        font: ${(props) => props.theme.typography["roboto-text-s"]};
        color: ${(props) => props.theme.colors["base-text"]};
      }
      h3 {
        font: ${(props) => props.theme.typography["baloo-title-m"]};
        color: ${(props) => props.theme.colors["base-text"]};
      }
    }

    .counter {
      background-color: ${(props) => props.theme.colors["base-button"]};
      border-radius: 6px;
      padding: 8px;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        border: none;
        display: flex;
        background-color: transparent;
        color: ${(props) => props.theme.colors.purple};

        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.colors["purple-dark"]};
        }
      }

      span {
        color: ${(props) => props.theme.colors["base-title"]};
        font: ${(props) => props.theme.typography["roboto-r-text-m"]};
      }
    }

    .cart {
      background-color: ${(props) => props.theme.colors["purple-dark"]};
      display: flex;
      padding: 8px;
      border-radius: 6px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${(props) => props.theme.colors.purple};
        cursor: pointer;
      }
    }
  }
`;
