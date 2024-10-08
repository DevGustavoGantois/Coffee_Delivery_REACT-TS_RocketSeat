import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { Copyright } from "./components/Copyright";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
