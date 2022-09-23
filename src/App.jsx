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

function App() {
  const {theme} = useTema()
  

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <HeaderBar />
          <Global />
          <BodyStyled>
            <main>
              <TrocaTemas>
              <AuthProvider>
                <Rotas />
              </AuthProvider>
              </TrocaTemas>
            </main>
          </BodyStyled>
          <Global />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
