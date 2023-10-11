import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeeCartContextProvider } from "./contexts/CoffeeCartContext";
import { UserInfoContextProvider } from "./contexts/UserInfoContext";

function App() {
  return (
    <UserInfoContextProvider>
      <CoffeeCartContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </CoffeeCartContextProvider>
    </UserInfoContextProvider>
  );
}

export default App;
