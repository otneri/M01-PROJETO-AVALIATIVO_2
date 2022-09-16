import {InputStyled, ConteinerInput} from './Input.styled'
import Proptypes from 'prop-types'
import { SubTitle } from '../SubTitle/SubTitle'

export const Input = ({children, placeholder, type, onChange}) => {

    return(
        <ConteinerInput>
            <SubTitle>{children}</SubTitle>
            <InputStyled placeholder={placeholder} type={type} onChange={onChange}></InputStyled>
        </ConteinerInput>

    )
}






Input.propTypes = {
    children : Proptypes.node,
    placeholder: Proptypes.string,
    type: Proptypes.string,
    onChange: Proptypes.func
}
