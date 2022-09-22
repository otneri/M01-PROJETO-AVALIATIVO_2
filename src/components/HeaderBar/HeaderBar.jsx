import { Logo } from "../../assets/img";
import { BotaoLogin } from "../Botoes/Botao";
import { useAuth } from "../../contexts/Autenticação/index";
import { Div, HeaderStyled, TitleHeaderStyled } from "./HeaderBar.styled";

export const HeaderBar = () => {
  // const [aute] =useAuth()

  return (
    <HeaderStyled>
      <Div>
        <Logo />
        <TitleHeaderStyled>Connect Lab</TitleHeaderStyled>
        <h1>Alguma coisa</h1>
      </Div>

      <BotaoLogin>login</BotaoLogin>
    </HeaderStyled>
  );
};
