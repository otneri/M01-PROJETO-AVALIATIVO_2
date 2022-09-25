import {Form} from '../../components/Forms/Formulario'
import {Paper} from '../../components/Paper/Paper'
import {Title} from '../../components/Titulo/Titulo'
import {Botao, BotaoLinkPaper} from '../../components/Botoes/Botao'
import { PerfilEditarStyled } from './PerfilEditar.styled'
import axios from 'axios'
import { FormEdita } from '../../components/Forms/Formulario_Editar'


// CONFIRMAR USER
// const editarPerfil = `https://connectlab.onrender.com/users/:id`
// const headers = {
//     "Authorization": "Bearer token",
// 	"Content-Type": "application/json"
// }




// const handleDadosAnteriores= (valores) => {
//   console.log(valores);
//   axios.put(editarPerfil, valores, headers)
//   .then((response) => {
//     console.log(response)
//     })
//   .catch((erro)=> alert( erro))
//   }
  


export const EditarPerfilPage = () => {
    

    return (
        <PerfilEditarStyled>
            <Paper>
                <Title>Meu perfil</Title>
                <FormEdita/>
               
                <BotaoLinkPaper href='/home'>Cancelar</BotaoLinkPaper>
            </Paper>
        </PerfilEditarStyled>
    )
}