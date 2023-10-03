import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: space-between;

  `

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: flex-start;
  width: 50%;

  h1 {
    font: ${props => props.theme.typography["baloo-title-xl"]}
  }

  p {
    font: ${props => props.theme.typography["roboto-r-text-l"]};
    color: ${props => props.theme.colors["base-subtitle"]}
  }
`

export const ImageContainer = styled.div``

export const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  
  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .5rem;
      border-radius: 999px;
      
      .icon {
        color: white;
      }
    }


    p {
      font: ${props => props.theme.typography["roboto-r-text-m"]};
      color: ${props => props.theme.colors["base-text"]}
    }
  }
`