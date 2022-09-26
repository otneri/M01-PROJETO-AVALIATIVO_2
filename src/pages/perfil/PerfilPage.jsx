import { Paper } from "../../components/Paper/Paper";
import { Title } from "../../components/Titulo/Titulo";
import { Botao, BotaoLinkPaper } from "../../components/Botoes/Botao";
import {
  ConteinerProfileStyled,
  DivPerfil,
  PerfilPageStyle,
  SubDivPerfil,
  TextoMaior,
  TextoMenor,
  Line,
} from "./PerfilPage.styled";
import { useDadosUser } from "../../contexts/dadosUser/useDadosUser";
import { Link } from "react-router-dom";

export const PerfilPage = () => {
  const { userdados } = useDadosUser();
  console.log(userdados);

  return (
    <PerfilPageStyle>
      <Paper>
        <Title>Meu Perfil</Title>
        <ConteinerProfileStyled>
          <img src={userdados.photo} alt='fotoperfil'/>
          <DivPerfil>
            <TextoMaior>{userdados.fullName}</TextoMaior>
            <SubDivPerfil>
              <TextoMenor>{userdados.email} </TextoMenor>
              <TextoMenor>{userdados.phone}</TextoMenor>
            </SubDivPerfil>
          </DivPerfil>
        </ConteinerProfileStyled>

        <DivPerfil>
          <TextoMaior>{userdados.userAddress.city}</TextoMaior>
          <Line />
          <TextoMenor>{userdados.userAddress.zipCode}</TextoMenor>
          <TextoMenor>
            {userdados.userAddress.street}, {userdados.userAddress.number} -
            {userdados.userAddress.complement} -
            {userdados.userAddress.neighborhood} - {userdados.userAddress.city}
            - {userdados.userAddress.state}
          </TextoMenor>
        </DivPerfil>

        <Botao><Link to='/editarPerfil'>Editar</Link></Botao>
        <BotaoLinkPaper>Sair</BotaoLinkPaper>
      </Paper>
    </PerfilPageStyle>
  );
};
