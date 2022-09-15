import {Paper} from '../../components/Paper/Paper'
import {Title} from '../../components/Title/Title'
import {Botao} from '../../components/Buttons/Botao'
import { LoginPageStyle, LoginStyle } from './LoginPage.styled'
import { FormLogin } from '../../components/Forms/FormLogin'

export const LoginPage = () => {
    return (
        <LoginPageStyle>

            <Paper>
                <Title>Acessar</Title>
                <FormLogin/>
                <Botao>Acessar</Botao>
                <LoginStyle href='/'>Cadastrar</LoginStyle>
            </Paper>
        </LoginPageStyle>
    )
}