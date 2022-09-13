// import { Global } from "./themes/TemaGlobal";
// import {BrowserRouter} from 'react-router-dom'
// import { Rotas } from "./routes";
import { Botao } from "./components/Buttons/Button";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Inputs/Input";
import { Paper } from "./components/Paper/Paper";
import { Title } from "./components/Title/Title";
import { Global } from "./themes";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";

function App() {
  

  return (
    
    <>
    <Header/>
    
    <BodyStyled>
    <Global/>
      <Paper>
        <Title>Cadastrar</Title>
        <Form/>
        <Botao>Cadastrar</Botao>

      </Paper>


    </BodyStyled>
    
    </>

    // <BrowserRouter>
    //   <Global/>
      
    //   <main >
    //     <Rotas/>
    //   </main>
    
    // </BrowserRouter>
  );
}

export default App;
