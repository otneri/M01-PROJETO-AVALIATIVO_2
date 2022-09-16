import { Input } from '../Inputs/Input'
import {FormStyle} from './Form.styled'
import PropTypes from 'prop-types'

export const FormLogin= ({onChange}) => {

    return (
        <FormStyle>
            <Input onChange={onChange}>E-mail</Input>
            <Input>Senha</Input>
        </FormStyle>

    )
}

FormLogin.propTypes = {
    onChange: PropTypes.func
}