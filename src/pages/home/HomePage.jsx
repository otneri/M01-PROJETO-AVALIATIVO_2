import { useState } from "react";
import {Botao, BotaoFiltroDevice} from "../../components/Buttons/Botao";
import { Paper, PaperDevice } from "../../components/Paper/Paper";
import { Title } from "../../components/Title/Title";
import Modal from 'react-modal'
import {
  HomeStyled,
  Pparagraph,
  SubParagraph,
  Paragraph,
  BotoesFiltroDevices,
  GridListDevices,
} from "./HomePage.styled";


export const HomePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const customStyle = {};

  return (
    <HomeStyled>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h1>Olá</h1>
        <Botao handleClick={handleCloseModal} cordefundo="asaa">
          fechar
        </Botao>
      </Modal>
      
      <Paper>
        <Title>16° C</Title>
        <Paragraph>Pato Branco, PR</Paragraph>
        <SubParagraph>
          <Pparagraph>Sensação térmica: 15ºC</Pparagraph>
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
