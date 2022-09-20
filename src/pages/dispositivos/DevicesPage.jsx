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
import { Input } from "../../components/Inputs/Input";
import { Select } from "../../components/SelectInput/Select";
import { ModalDevice } from "../../components/Modal/ModalDevice";
import { ConteinerInput } from "../../components/Inputs/Input.styled";

export const DevicesPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <ConteinerStld>
      <ModalDevice isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <Title>Lâmpada Inteligente</Title>
        <ConteinerInput>
          <SubTitle>Local*</SubTitle>
          <Select placeholder="Digite o local" />
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Cômodo*</SubTitle>
          <Input placeholder="Digite o cômodo"></Input>
        </ConteinerInput>

        <DivButtonsModalStld>
          <BotaoLogin handleClick={() => {}}>confirmar</BotaoLogin>
          <Botao handleClick={handleCloseModal}>cancelar</Botao>
        </DivButtonsModalStld>
      </ModalDevice>
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
      </GridListDevices>
    </ConteinerStld>
  );
};
