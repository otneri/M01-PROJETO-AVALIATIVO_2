// import { Global } from "./themes/TemaGlobal";
// import {BrowserRouter} from 'react-router-dom'
// import { Rotas } from "./routes";
import { Botao } from "./components/Buttons/Button";
import { Paper } from "./components/Paper/Paper";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";

function App() {
  

  return (


    <BodyStyled>

      <Paper>

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
