import { Logo } from "../../assets/img";
import { BotaoLogin } from "../Botoes/Botao";
import { useAuth } from "../../contexts/Autenticação/index";
import { Div, HeaderStyled, TitleHeaderStyled } from "./HeaderBar.styled";
import {Link} from 'react-router-dom'
import { Navbar } from "../../components/NavbarComp/NavbarComp";

export const HeaderBar = () => {
  const {token} =useAuth()
  

  return (
    <HeaderStyled>
      <Div>
        <Logo />
        <TitleHeaderStyled>Connect Lab</TitleHeaderStyled>
        
      </Div>

      {token?<Navbar/>:<BotaoLogin><Link to='/'>Login</Link></BotaoLogin>}
      
    </HeaderStyled>
  );
};
