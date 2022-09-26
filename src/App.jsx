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
import { Logado } from "./contexts/Logado/Logado";
import { DadosProvider } from "./contexts/dadosUser/dadosUser.Provider";

Modal.setAppElement("#root");

function App() {
  const { thema } = useTema();

  return (
    <ThemeProvider theme={temaPrincipal}>
      <BrowserRouter>
        <AuthProvider>
        <DadosProvider>

          <Logado>
            <HeaderBar />
            <Global />
            <TrocaTemas>
              <BodyStyled>
                <Rotas />
              </BodyStyled>
            </TrocaTemas>
            <Global />
          </Logado>
          </DadosProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
