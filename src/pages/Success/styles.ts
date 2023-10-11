import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .successCard {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid ${(props) => props.theme.colors.yellow};
    padding: 2rem;
    border-radius: 6px 36px;

    .itemContainer {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .iconContainer {
        display: flex;
        padding: 0.25rem;
        border: 1px solid grey;
        border-radius: 50%;
      }
      .text {
        color: ${(props) => props.theme.colors["base-text"]} p {
          font: ${(props) => props.theme.typography["roboto-r-text-m"]};
        }
        span {
          font: ${(props) => props.theme.typography["roboto-b-text-m"]};
        }
      }
    }
  }
`;

export const SuccessTitle = styled.h1`
  font: ${(props) => props.theme.typography["baloo-title-l"]};
  color: ${(props) => props.theme.colors["yellow-dark"]};
`;

export const SuccessParag = styled.p`
  font: ${(props) => props.theme.typography["roboto-b-text-l"]};
  color: ${(props) => props.theme.colors["base-subtitle"]};
`;
