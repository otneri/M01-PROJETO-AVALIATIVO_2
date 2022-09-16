import {InputStyled, ConteinerInput} from './Input.styled'
import Proptypes from 'prop-types'
import { SubTitle } from '../SubTitle/SubTitle'
import { useForm } from 'react-hook-form'

export const Input = ({children, placeholder, type, onChange, name, registro}) => {
    const {register} = useForm();

    return(
        <ConteinerInput>
            <SubTitle>{children}</SubTitle>
            <InputStyled registro={register}  placeholder={placeholder} type={type} onChange={onChange} name={name}/>
        </ConteinerInput>

    )
}


Input.propTypes = {
    children : Proptypes.node,
    placeholder: Proptypes.string,
    type: Proptypes.string,
    onChange: Proptypes.func,
    name: Proptypes.string,
    registro: Proptypes.string
}
