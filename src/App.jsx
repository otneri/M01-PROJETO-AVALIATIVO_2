import { Global } from "./themes/TemaGlobal";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes";
import { Header } from "./components/Header/Header";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Global />
        <BodyStyled>
          <main>
            <Rotas />
          </main>
        </BodyStyled>
      <Global />
    </BrowserRouter>
  );
}

export default App;
