import styled from "styled-components";

export const CoffeListContainer = styled.div`

  margin-top: 4rem;

  h1 {
    font: ${props => props.theme.typography["baloo-title-l"]};
    color: ${props => props.theme.colors["base-subtitle"]}
  }
`

export const CoffeListContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  .card {
    background-color: ${props => props.theme.colors["base-card"]};
    width: 20%;
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    padding: 2rem;
    gap: .875rem;
    min-width: 256px;

    .badgeContainer {
      display: flex;
      gap: .75rem;
      .badge {
        background-color: ${props => props.theme.colors["yellow-light"]};
        padding: 4px 8px;
        border-radius: 100px;
        display: flex;
  
        h3 {
          color: ${props => props.theme.colors["yellow-dark"]};
          font: ${props => props.theme.typography.tag};
          text-transform: uppercase;
        }
      }
    }


    h2 {
      font: ${props => props.theme.typography["baloo-title-s"]};
      color: ${props => props.theme.colors["base-subtitle"]};
      text-align: center;
      text-transform: capitalize;
    }

    p {
      font: ${props => props.theme.typography["roboto-text-s"]};
      color: ${props => props.theme.colors["base-label"]};
      text-align: center;
    }

    .price-and-cart {
      align-self: flex-start;

      .price {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        span {
          font: ${props => props.theme.typography["roboto-text-s"]};
          color: ${props => props.theme.colors["base-text"]};
        }
        h3 {
          font: ${props => props.theme.typography["baloo-title-m"]};
          color: ${props => props.theme.colors["base-text"]};
        }
      }
    }
  }
`