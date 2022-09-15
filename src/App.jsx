import { Global } from "./themes/TemaGlobal";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes";
import { Header } from "./components/Header/Header";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";
import Modal from "react-modal";
import { AuthProvider } from "contexts/Autenticação";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Global />
          <BodyStyled>
            <main>
              <Rotas/>
            </main>
          </BodyStyled>
        <Global />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
