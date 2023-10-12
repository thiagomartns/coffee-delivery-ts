import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: flex-start;
  width: 50%;

  @media (min-width: 375px) and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    font: ${(props) => props.theme.typography["baloo-title-xl"]};

    @media (min-width: 375px) and (max-width: 767px) {
      font: ${(props) => props.theme.typography["baloo-title-l"]};
      text-align: center;
    }
  }

  p {
    font: ${(props) => props.theme.typography["roboto-r-text-l"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};

    @media (min-width: 375px) and (max-width: 767px) {
      font: ${(props) => props.theme.typography["roboto-r-text-m"]};
      text-align: center;
    }
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 375px) and (max-width: 1000px) {
    display: none;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 375px) and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 999px;

      .icon {
        color: white;
      }
    }

    p {
      font: ${(props) => props.theme.typography["roboto-r-text-m"]};
      color: ${(props) => props.theme.colors["base-text"]};
      text-align: left;
    }
  }
`;
