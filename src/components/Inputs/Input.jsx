import {InputStyled, ConteinerInput} from './Input.styled'
import Proptypes from 'prop-types'
import { SubTitle } from '../SubTitle/SubTitle'
import { useForm } from 'react-hook-form'

export const Input = ({children, placeholder, type, onChange, name, registro }) => {
    const {register , formState} = useForm();
    const requiredErrors = formState.errors.name?.type  === 'required';

    return(
        <ConteinerInput>
            <SubTitle>{children}</SubTitle>
            <InputStyled registro={register} placeholder={placeholder} type={type} onChange={onChange} {...register ('name', {required: true})}/>
        {requiredErrors && <span>Campo obrigatório!</span>}
        </ConteinerInput>
    )
}


Input.propTypes = {
    children : Proptypes.node,
    placeholder: Proptypes.string,
    type: Proptypes.string,
    onChange: Proptypes.func,
    name: Proptypes.node,
    registro: Proptypes.string,
}
