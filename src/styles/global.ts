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
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    /* font: ${props => props.theme.typography["baloo-title-xl"]}; */
    font-weight: 400;
    font-size: 1rem
  }
`;