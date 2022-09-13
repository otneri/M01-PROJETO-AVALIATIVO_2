// import { Global } from "./themes/TemaGlobal";
// import {BrowserRouter} from 'react-router-dom'
// import { Rotas } from "./routes";
import { Botao } from "./components/Buttons/Button";
import { Paper } from "./components/Paper/Paper";
import { Title } from "./components/Title/Title";
import { Global } from "./themes";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";

function App() {
  

  return (
    

    <BodyStyled>
      <Global/>

      <Paper>
        <Title>Olá Mundo!</Title>
        <Botao>Login</Botao>

      </Paper>


    </BodyStyled>
    // <BrowserRouter>
    //   <Global/>
      
    //   <main >
    //     <Rotas/>
    //   </main>
    
    // </BrowserRouter>
  );
}

export default App;
