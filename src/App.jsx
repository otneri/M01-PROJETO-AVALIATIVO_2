import { Global } from "./themes/TemaGlobal";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes";
import { HeaderBar } from "./components/HeaderBar/HeaderBar";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";
import Modal from "react-modal";
import { AuthProvider } from "./contexts/index";
import { ThemeProvider } from "styled-components";
import { temaDark, temaPrincipal } from "./themes";
import { useState } from "react";
import { BotaoFiltroDevice } from "./components/Botoes/Botao";
import { TrocaTemas } from "./contexts/Temas/Temas";
import { useTema } from "./contexts/Temas/useTema";

Modal.setAppElement("#root");

// const [thema, setThema] = useState([]);

// const handleThema = () => {
//   setThema((prev) => {
//       const newThema = prev === temaDark ? temaPrincipal : temaDark;
//       setThema(newThema)
//       return newThema;

//   })

function App() {
  const {thema} = useTema()


  return (
    <BrowserRouter>
      {/* <BotaoFiltroDevice handleClick={handleThema}>BotaonoApp</BotaoFiltroDevice> */}
      <ThemeProvider theme={thema}>
          <HeaderBar />
          <Global />
          <BodyStyled>
              <AuthProvider>
                <TrocaTemas>
                  <Rotas />
                </TrocaTemas>
              </AuthProvider>
          </BodyStyled>
          <Global />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
