import { Global } from "./themes/TemaGlobal";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes";
import { Header } from "./components/HeaderBar/HeaderBar";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";
import Modal from "react-modal";
import { AuthProvider } from "./contexts/index";
import { ThemeProvider } from "styled-components";
import { temaPrincipal } from "./themes";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={temaPrincipal}>
        <AuthProvider>
          <Header />
          <Global />
          <BodyStyled>
            <main>
              <Rotas />
            </main>
          </BodyStyled>
          <Global />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
