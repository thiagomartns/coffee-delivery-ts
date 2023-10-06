import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeeCartContextProvider } from "./contexts/CoffeeCartContext";

function App() {
  return (
    <CoffeeCartContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </CoffeeCartContextProvider>
  );
}

export default App;
