// import { Global } from "./themes/TemaGlobal";
// import {BrowserRouter} from 'react-router-dom'
// import { Rotas } from "./routes";
import { Header } from "./components/Header/Header";
import { Global } from "./themes";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";
import Modal from 'react-modal'
import { HomePage } from "./pages/home/HomePage";
import { DevicesPage } from "./pages/dispositivos/DevicesPage";

Modal.setAppElement( "#root")

function App() {
  

  return (
    
    <>

      <Header/>
      <Global/>
      <BodyStyled>
      
      <DevicesPage/>
      
      
      
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
