// import { Global } from "./themes/TemaGlobal";
// import {BrowserRouter} from 'react-router-dom'
// import { Rotas } from "./routes";
import { Header } from "./components/Header/Header";
import { DevicesPage } from "./pages/dispositivos/DevicesPage";
import { Global } from "./themes";
import { BodyStyled } from "./themes/ConfiguracaoGeral.styles";

function App() {
  

  return (
    
    <>
      <Header/>

      <BodyStyled>
      
      <Global/>
      
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
