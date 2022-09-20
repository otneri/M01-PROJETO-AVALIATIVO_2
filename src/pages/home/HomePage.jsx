import { useState } from "react";
import {
  Botao,
  BotaoFiltroDevice,
  BotaoOnOff,
} from "../../components/Buttons/Botao";
import { Paper, PaperDevice } from "../../components/Paper/Paper";
import { Title } from "../../components/Title/Title";
import Modal from "react-modal";
import {
  HomeStyled,
  Pparagraph,
  Paragraph,
  BotoesFiltroDevices,
  GridListDevices,
  DivBotaoPowerstld,
} from "./HomePage.styled";
import { Logo } from "../../assets/img";
import { SubParagraph } from "../../components/SubTitle/SubTitle";

export const HomePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const customStyle = {
    content: {
      top: "10%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "max-content",
      transform: "translate(-40%, -10%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      gap: "1em",
    },
  };
  

  
  const city = 'Curitiba';

  const [wether, setWether]=useState({})
  
  const getWetherData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},br&units=metric&APPID=d5151cdb3fa13b265ad28b66e3220361`)
    .then ((res)=> res.json())
    .then((data) =>  {
      console.log(data)
      setWether(data.main.temp)

    }
    );
    
  };


  return (
    <HomeStyled onLoad={getWetherData(city)} >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyle}
      >
        <Title>Lâmpada</Title>
        <Paragraph>Fabricante</Paragraph>
        <Logo />
        <DivBotaoPowerstld>
          <SubParagraph>dispositivo ligado</SubParagraph>
          <BotaoOnOff>On</BotaoOnOff>
        </DivBotaoPowerstld>

        <Paragraph>Informações do dispositivo</Paragraph>
        <SubParagraph>ID virtual: asdakjsdkasdkajsdkajkdsk</SubParagraph>
        <SubParagraph>Endereço IP:</SubParagraph>
        <SubParagraph>Endereço MAC:</SubParagraph>
        <SubParagraph>Fuso horário:</SubParagraph>
        <SubParagraph>Força do sinal:</SubParagraph>

        <Botao handleClick={handleCloseModal}>remover</Botao>
      </Modal>

      <Paper>
        <Title>&deg; C</Title>
        <Paragraph>, PR</Paragraph>
        <SubParagraph>
          <Pparagraph>Sensação térmica: <span>15</span>&deg;C</Pparagraph>
          <Pparagraph>Precipitação: 0mm</Pparagraph>
          <Pparagraph>Chance de chuva: 0%</Pparagraph>
        </SubParagraph>
      </Paper>

      <BotoesFiltroDevices>
        <BotaoFiltroDevice>Todos</BotaoFiltroDevice>
        <BotaoFiltroDevice>Casa</BotaoFiltroDevice>
        <BotaoFiltroDevice>Escritório</BotaoFiltroDevice>
      </BotoesFiltroDevices>

      <GridListDevices>
        <PaperDevice handleclick={handleOpenModal} />
        <PaperDevice />
        <PaperDevice />
        <PaperDevice />
        <PaperDevice />
        <PaperDevice />
      </GridListDevices>
    </HomeStyled>
  );
};

//  ba605efc18f1572f61892fe426f18a1a