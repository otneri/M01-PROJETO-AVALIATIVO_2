import {Form} from '../../components/Forms/Form'
import {Paper} from '../../components/Paper/Paper'
import {Title} from '../../components/Title/Title'
import {Botao, BotaoLinkPaper} from '../../components/Buttons/Botao'
import { CadastroStyle } from './Cadastro.styled'

export const Cadastro = () => {
    return (
        <CadastroStyle>
            <Paper>
                <Title>Cadastrar</Title>
                <Form/>
                <Botao type='submit' handleClick={(console.log('Clicou'))}>Cadastrar</Botao>
                <BotaoLinkPaper href='/'>Login</BotaoLinkPaper>
            </Paper>
        </CadastroStyle>
    )
}