import { useState, useEffect } from "react";
import { Logo } from "../../assets/img";
import { Botao, BotaoLogin } from "../../components/Botoes/Botao";
import { Paper } from "../../components/Paper/Paper";
import { SubTitle } from "../../components/SubTitle/SubTitulo";
import { Title } from "../../components/Titulo/Titulo";
import { GridListDevices, Paragraph } from "../homepage/HomePage.styled";
import {
  ConteinerStld,
  DivButtonsModalStld,
  DivDevicespgStld,
  DivSearchBarStld,
  ImgStld,
  SearchBar,
} from "./DevicesPage.styld";
import { Input } from "../../components/Inputs/InputComp";
import { Select } from "../../components/SelectInput/SelectInput";
import { ModalDevice } from "../../components/Modais/ModalDevice";
import { ConteinerInput } from "../../components/Inputs/InputComp.styled";
import axios from "axios";
import { useLogado } from "../../contexts/Logado/useLogado";
import { useAuth } from "../../contexts/Autenticação/useAuth";

export const DevicesPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { token } = useAuth();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // LISTA DE DISPOSITIVOS
  const connectListaDevices = `https://connectlab.onrender.com/devices`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const [devices, setDevices] = useState({});

  const getListaDevices = () => {
    axios
      .get(connectListaDevices, { headers })
      .then((resp) => {
        console.log(resp.data, "getdevices");
        setDevices(resp.data);
        console.log(devices);
      })
      .catch((err) => console.log(err));
  };

  console.log("device fora", devices);
  // LISTA DE DISPOSITIVOS

  return (
    <ConteinerStld onLoad={getListaDevices}>
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
        <Title>Devices Storage</Title>

        <SubTitle>Nome do dispositivo</SubTitle>

        <DivSearchBarStld>
          <SearchBar />
          <Botao>Pesquisar</Botao>
        </DivSearchBarStld>
      </DivDevicespgStld>

      <GridListDevices>
        <Paper>
          <ImgStld src="" alt="device" />
          <Paragraph>ALGO</Paragraph>
          <Botao handleClick={handleOpenModal}>Adicionar</Botao>
        </Paper>

        {devices.map((device, id) => (
          <Paper key={id}>
            <ImgStld src={device.photoUrl} alt="device" />
            <Paragraph>{device.name}</Paragraph>
            <Botao handleClick={handleOpenModal}>Adicionar</Botao>
          </Paper>

        ))}
          
      </GridListDevices>
    </ConteinerStld>
  );
};
