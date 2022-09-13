import {BotaoStyled, BotaoStyledLogin} from './Buttons.styles'

import Proptypes from 'prop-types'

export const Botao = ({children}) => {
    
    return (
        <BotaoStyled >{children}</BotaoStyled>

    )

    
}
export const BotaoLogin = ({children}) => {
    
    return (
        <BotaoStyledLogin >{children}</BotaoStyledLogin>

    )

    
}

Botao.propTypes = {
    children : Proptypes.node.isRequired,
}

BotaoLogin.propTypes = {
    children : Proptypes.node.isRequired,

}