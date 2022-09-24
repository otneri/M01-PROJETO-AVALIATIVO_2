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
  SearchBar,
} from "./DevicesPage.styld";
import { Input } from "../../components/Inputs/InputComp";
import { Select } from "../../components/SelectInput/SelectInput";
import { ModalDevice } from "../../components/Modais/ModalDevice";
import { ConteinerInput } from "../../components/Inputs/InputComp.styled";


export const DevicesPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  
  // const [dispositivos, setDispositivos] = useState([]);
  
  // async function componenteDevices ()  {
  //   const response = await serverConnectLabDevices.get('');
  //   return console.log(response.data);
     
  // };

  
    
  // const getDataWether = () => {
    
  // }


            // 
            // 
            // 
            // 
  return (
    <ConteinerStld >
      
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
        <Title>   </Title>

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
