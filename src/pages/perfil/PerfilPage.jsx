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
import { Logo } from "../../assets/img";

console.log('Peido');

export const PerfilPage = () => {
  return (
    <PerfilPageStyle>
      
      <Paper>
        <Title>Meu Perfil</Title>
        <ConteinerProfileStyled>
          <Logo />
          <DivPerfil>
            <TextoMaior>Nome Completo</TextoMaior>
            <SubDivPerfil>
              <TextoMenor>email@email.com -</TextoMenor>
              <TextoMenor>(46) 99999-9999</TextoMenor>
            </SubDivPerfil>
          </DivPerfil>
        </ConteinerProfileStyled>

        <DivPerfil>
          <TextoMaior>Endereço</TextoMaior>
          <Line />
          <TextoMenor>85500-000</TextoMenor>
          <TextoMenor>
            Av. Tupi, 5790 - Ap 180 - Centro - Pato Branco - PR{" "}
          </TextoMenor>
        </DivPerfil>

        <Botao>Editar</Botao>
        <BotaoLinkPaper>Sair</BotaoLinkPaper>
      </Paper>
    </PerfilPageStyle>
  );
};
