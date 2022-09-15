import {InputStyled, ConteinerInput} from './Input.styled'
import Proptypes from 'prop-types'
import { SubTitle } from '../SubTitle/SubTitle'

export const Input = ({children, placeholder, type}) => {

    return(
        <ConteinerInput>
            <SubTitle>{children}</SubTitle>
            <InputStyled placeholder={placeholder} type={type}></InputStyled>
        </ConteinerInput>

    )
}






Input.propTypes = {
    children : Proptypes.node,
    placeholder: Proptypes.string,
    type: Proptypes.string
}
