import {Form} from '../../components/Forms/Form'
import {Paper} from '../../components/Paper/Paper'
import {Title} from '../../components/Title/Title'
import {Botao} from '../../components/Buttons/Button'
import { CadastroStyle, LoginStyle } from './Cadastro.styled'

export const Cadastro = () => {
    return (
        <CadastroStyle>

            <Paper>
                <Title>Cadastrar</Title>
                <Form/>
                <Botao>Cadastrar</Botao>
                <LoginStyle href='/'>Login</LoginStyle>
            </Paper>
        </CadastroStyle>
    )
}