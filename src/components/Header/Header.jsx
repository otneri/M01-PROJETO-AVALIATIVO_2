import { Logo } from "../../assets/img"
import { BotaoLogin } from "../Buttons/Botao"

import { Div, HeaderStyled,TitleHeaderStyled} from "./Header.styled"

export const Header = () => {
    return (
        
        <HeaderStyled>
            <Div>
                <Logo/>
                <TitleHeaderStyled>Connect Lab</TitleHeaderStyled>
            </Div>
            <BotaoLogin>login</BotaoLogin>

        </HeaderStyled>
        
    )
}