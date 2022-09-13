import { Input } from '../Inputs/Input'
import {FormStyle} from './Form.styled'

export const FormLogin= () => {

    return (
        <FormStyle>
            <Input>E-mail</Input>
            <Input>Senha</Input>
        </FormStyle>

    )
}