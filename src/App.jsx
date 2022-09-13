// import { Global } from "./themes/TemaGlobal";
// import {BrowserRouter} from 'react-router-dom'
// import { Rotas } from "./routes";
import { Botao } from "./components/Buttons/Button";
import { Form } from "./components/Forms/Form";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Inputs/Input";
import { Navbar } from "./components/Navbar/Navbar";
import { Paper } from "./components/Paper/Paper";
import { Title } from "./components/Title/Title";
import { Cadastro } from "./pages/cadastro/Cadastro";
import { LoginPage } from "./pages/login/LoginPage";
import { Global } from "./themes";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";

function App() {
  

  return (
    
    <>
    <Header/>
    
    <BodyStyled>
    <Global/>
    
    <LoginPage/>
    

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
