import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 1.25rem 0;
  background-color: #fff;
  z-index: 100;

  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    margin-bottom: 0;
    max-height: 0;
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
      align-items: center;
      background-color: ${(props) => props.theme.colors["purple-light"]};
      border-radius: 6px;
      display: flex;
      gap: 4px;
      justify-content: center;
      padding: 1rem;

      .icon {
        color: ${(props) => props.theme.colors.purple};
      }

      p {
        color: ${(props) => props.theme.colors.purple};
        font: ${(props) => props.theme.typography["roboto-text-s"]};
      }
    }

    .button-cart {
      background-color: ${(props) => props.theme.colors["yellow-light"]};
      border-radius: 6px;
      position: relative;
      padding: 0.75rem 1rem;

      .counter {
        align-items: center;
        background-color: ${(props) => props.theme.colors["yellow-dark"]};
        border-radius: 999px;
        display: flex;
        height: 24px;
        justify-content: center;
        width: 24px;
        position: absolute;
        top: -10px;
        right: -10px;

        p {
          color: ${(props) => props.theme.colors.white};
          font: ${(props) => props.theme.typography["roboto-text-s"]};
        }
      }

      .icon {
        color: ${(props) => props.theme.colors["yellow-dark"]};
      }
    }
  }
`;
