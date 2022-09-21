import { Logo } from "../../assets/img";
import { BotaoLogin } from "../Botoes/Botao";
import { useAuth } from "../../contexts/Autenticação/index";
import { Div, HeaderStyled, TitleHeaderStyled } from "./HeaderBar.styled";

export const Header = () => {
  // const [aute] =useAuth()

  return (
    <HeaderStyled>
      <Div>
        <Logo />
        <TitleHeaderStyled>Connect Lab</TitleHeaderStyled>
      </Div>

      <BotaoLogin>login</BotaoLogin>
    </HeaderStyled>
  );
};
