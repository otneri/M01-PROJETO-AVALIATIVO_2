import {InputStyled, ConteinerInput} from './Input.styled'
import Proptypes from 'prop-types'
import { SubTitle } from '../SubTitle/SubTitle'

export const Input = ({children}) => {

    return(
        <ConteinerInput>
            <SubTitle>{children}</SubTitle>
            <InputStyled placeholder='Seu e-mail'></InputStyled>
        </ConteinerInput>

    )
}


Input.propTypes = {
    children : Proptypes.node,
}