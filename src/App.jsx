// import { Global } from "./themes/TemaGlobal";
// import {BrowserRouter} from 'react-router-dom'
// import { Rotas } from "./routes";
import { Header } from "./components/Header/Header";
import { LoginPage } from "./pages/login/LoginPage";
import { PerfilPage } from "./pages/perfil/PerfilPage";
import { Global } from "./themes";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";

function App() {
  

  return (
    
    <>
    <Header/>

    <BodyStyled>
    
    <Global/>
    
    <PerfilPage/>
    

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
