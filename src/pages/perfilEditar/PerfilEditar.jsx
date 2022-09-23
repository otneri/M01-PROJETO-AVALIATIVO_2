import {Form} from '../../components/Forms/Formulario'
import {Paper} from '../../components/Paper/Paper'
import {Title} from '../../components/Titulo/Titulo'
import {Botao, BotaoLinkPaper} from '../../components/Botoes/Botao'
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