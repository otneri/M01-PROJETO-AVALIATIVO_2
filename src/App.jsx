// import { Global } from "./themes/TemaGlobal";
// import {BrowserRouter} from 'react-router-dom'
// import { Rotas } from "./routes";
import { Header } from "./components/Header/Header";
import { EditarPerfilPage } from "./pages/perfilEditar/PerfilEditar";
import { Global } from "./themes";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";

function App() {
  

  return (
    
    <>
    <Header/>

    <BodyStyled>
    
    <Global/>
    
    <EditarPerfilPage/>
    

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
