import {BotaoStyled} from './Buttons.styles'

import Proptypes from 'prop-types'

export const Botao = ({children}) => {
    
    return (
        <BotaoStyled >{children}</BotaoStyled>

    )

    
}

Botao.propTypes = {
    children : Proptypes.node.isRequired,
}