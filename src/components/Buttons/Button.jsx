import {BotaoLinkStiled, BotaoStyled, BotaoStyledLogin } from './Buttons.styles'

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

export const BotaoLinkPaper = ({children}) => {
    
    return (
        <BotaoLinkStiled>{children}</BotaoLinkStiled>

    )
}

Botao.propTypes = {
    children : Proptypes.node.isRequired,
}

BotaoLogin.propTypes = {
    children : Proptypes.node.isRequired,

}

BotaoLinkPaper.propTypes = {
    children : Proptypes.node.isRequired,

}