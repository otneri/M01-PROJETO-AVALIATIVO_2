import {Form} from '../../components/Forms/Form'
import {Paper} from '../../components/Paper/Paper'
import {Title} from '../../components/Title/Title'
import {Botao, BotaoLinkPaper} from '../../components/Buttons/Button'
import { CadastroStyle } from './Cadastro.styled'

export const Cadastro = () => {
    return (
        <CadastroStyle>

            <Paper>
                <Title>Cadastrar</Title>
                <Form/>
                <Botao>Cadastrar</Botao>
                <BotaoLinkPaper href='/'>Login</BotaoLinkPaper>
            </Paper>
        </CadastroStyle>
    )
}