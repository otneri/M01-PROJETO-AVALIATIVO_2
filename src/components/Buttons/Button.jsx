import {BotaoLinkStiled, BotaoOnOffStyled, BotaoStyled, BotaoStyledLogin } from './Buttons.styles'

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

export const BotaoOnOff = ({children}) => {
    
    return (
        <BotaoOnOffStyled >{children}</BotaoOnOffStyled>

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


BotaoOnOff.propTypes = {
    children : Proptypes.node.isRequired,

}