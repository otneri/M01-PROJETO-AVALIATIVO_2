import { Navbar } from "../Navbar/Navbar"
import { Div, HeaderStyled,TitleHeaderStyled} from "./Header.styled"
import Logo from '../../assets/react.svg'

export const Header = () => {
    
    return (
        
        <HeaderStyled>
            <Div>

                {Logo}

                <TitleHeaderStyled>ConnectLab</TitleHeaderStyled>

            </Div>
            <Navbar/>

        </HeaderStyled>
        
    )
}