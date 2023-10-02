import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-title"]};
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  body, input-security, textarea, button {
    /* font-family: 'Roboto', sans-serif; */
    font: ${props => props.theme.typography["baloo-title-xl"]};
    font-weight: 400;
    font-size: 1rem
  }
`;