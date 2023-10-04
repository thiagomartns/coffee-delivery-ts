import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 2rem;

  @media (min-width: 375px) and (max-width: 767px) {
    margin-bottom: 0;
    max-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (min-width: 375px) and (max-width: 767px) {
      display: none;
    }

    .button-city {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      background-color: ${props => props.theme.colors["purple-light"]};
      border-radius: 6px;
      padding: 1rem;

      .icon {
        color: ${props => props.theme.colors.purple};
      }

      p {
        font: ${props => props.theme.typography["roboto-text-s"]};
        color: ${props => props.theme.colors.purple};
      }
    }

    .button-cart {
      padding: .75rem 1rem;
      border-radius: 6px;
      background-color: ${props => props.theme.colors["yellow-light"]};

      .icon {
        color: ${props => props.theme.colors["yellow-dark"]};
      }
    }
  }
`