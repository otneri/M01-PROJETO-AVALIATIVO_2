import {Form} from '../../components/Forms/Form'
import {Paper} from '../../components/Paper/Paper'
import {Title} from '../../components/Title/Title'
import {Botao, BotaoLinkPaper} from '../../components/Buttons/Botao'
import { PerfilEditarStyled } from './PerfilEditar.styled'

export const EditarPerfilPage = () => {
    return (
        <PerfilEditarStyled>
            <Paper>
                <Title>Meu perfil</Title>
                <Form/>
                <Botao>Salvar</Botao>
                <BotaoLinkPaper href='/'>Cancelar</BotaoLinkPaper>
            </Paper>
        </PerfilEditarStyled>
    )
}