import { Input } from '../Inputs/Input'
import {FormStyle} from './Form.styled'

export const Form = () => {

    return (
        <FormStyle>
          <Input>Nome completo</Input>
          <Input>E-mail</Input>
          <Input>URL foto perfil</Input>
          <Input>Telefone</Input>
          <Input>Senha</Input>
          <Input>Confirmação de senha</Input>
          <Input>CEP</Input>
          <Input>Logradouro/Endereço</Input>
          <Input>Cidade</Input>
          <Input>Estado</Input>
          <Input>Complemento</Input>
          <Input>Número</Input>
          <Input>Bairro</Input>

        </FormStyle>
    )

}