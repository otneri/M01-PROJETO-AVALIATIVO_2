import { Form } from "../../components/Forms/Formulario";
import { Paper } from "../../components/Paper/Paper";
import { Title } from "../../components/Titulo/Titulo";
import { CadastroStyle } from "./Cadastro.styled";

export const Cadastro = () => {
  
  return (
    <CadastroStyle>
      
      <Paper>
        <Title>Cadastrar</Title>
        <Form />
      </Paper>
    </CadastroStyle>
  );
};
