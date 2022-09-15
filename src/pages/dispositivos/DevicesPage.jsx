import { useState } from "react";
import { Logo } from "../../assets/img";
import { Botao, BotaoLogin } from "../../components/Buttons/Botao";
import { Paper } from "../../components/Paper/Paper";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import { Title } from "../../components/Title/Title";
import { GridListDevices, Paragraph } from "../home/HomePage.styled";
import {
  ConteinerStld,
  DivButtonsModalStld,
  DivDevicespgStld,
  DivSearchBarStld,
  SearchBar,
} from "./DevicesPage.styld";
import Modal from "react-modal";
import { temaPrincipal } from "../../themes";
import { Input } from "../../components/Inputs/Input";
import { Select } from "../../components/SelectInput/Select";

export const DevicesPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const customStyle = {
    content: {
      top: "35%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "60%",
      transform: "translate(-40%, -10%)",
      background: `${temaPrincipal.colors.backgroundPrincipal}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      gap: '1em'
    },
  };
  
  return (
    <ConteinerStld>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyle}
      >
        <Title>Lâmpada Inteligente</Title>

        <Select placeholder={"Selecione o Local"}>Local</Select>
        <Input placeholder={"Selecione o Cômodo"}>Cômodo</Input>

        <DivButtonsModalStld>
          <BotaoLogin handleClick={() => {}}>confirmar</BotaoLogin>
          <Botao handleClick={handleCloseModal}>cancelar</Botao>
        </DivButtonsModalStld>
      </Modal>
      <DivDevicespgStld>
        <Title>Dispositivos</Title>

        <SubTitle>Nome do dispositivo</SubTitle>

        <DivSearchBarStld>
          <SearchBar />
          <Botao>Pesquisar</Botao>
        </DivSearchBarStld>
      </DivDevicespgStld>

      <GridListDevices>
        <Paper>
          <Logo />
          <Paragraph>Device</Paragraph>
          <Botao handleClick={handleOpenModal}>Adicionar</Botao>
        </Paper>

        <Paper>
          <Logo />
          <Paragraph>asas</Paragraph>
          <Botao>ASa</Botao>
        </Paper>

        <Paper>
          <Logo />
          <Paragraph>asas</Paragraph>
          <Botao>ASa</Botao>
        </Paper>

        <Paper>
          <Logo />
          <Paragraph>asas</Paragraph>
          <Botao>ASa</Botao>
        </Paper>

        <Paper>
          <Logo />
          <Paragraph>asas</Paragraph>
          <Botao>ASa</Botao>
        </Paper>
      </GridListDevices>
    </ConteinerStld>
  );
};
