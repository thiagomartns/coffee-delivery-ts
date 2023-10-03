import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  `

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;

  h1 {
    font: ${props => props.theme.typography["baloo-title-xl"]}
  }

  p {
    font: ${props => props.theme.typography["roboto-r-text-l"]}
  }
`

export const ImageContainer = styled.div``

export const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 1.25rem;
  width: 100%;
  
  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon-wrapper {
      display: flex;
      background-color: pink;
      padding: 1rem;
      border-radius: 50%;
      
      .icon {
        color: white;
      }
    }


    p {
      font: ${props => props.theme.typography["roboto-r-text-m"]}
    }
  }
`