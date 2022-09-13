// import {useLocation} from 'react-router-dom'
import { LiStyled, NavStyled, UlStyled, AStyled } from './Navbar.styled';

export const Navbar = () => {
    // const { pathname } = useLocation();

   return (
        <NavStyled>
            <UlStyled>
                <LiStyled>
                    <AStyled href='/'>Inicio</AStyled>
                </LiStyled>
                
                <LiStyled>
                    <AStyled href='/'>Dispositivos</AStyled >
                </LiStyled>

                <LiStyled>
                    <AStyled href='/'>Perfil</AStyled>
                </LiStyled>
            </UlStyled>
            
        </NavStyled>
   )
}