import { useState } from "react"
import { Logo } from "../../assets/img"
import { Botao } from "../../components/Buttons/Botao"
import { Paper } from "../../components/Paper/Paper"
import { SubTitle } from "../../components/SubTitle/SubTitle"
import { Title } from "../../components/Title/Title"
import { GridListDevices, Paragraph } from "../home/HomePage.styled"
import { ConteinerStld, DivDevicespgStld, DivSearchBarStld, SearchBar } from "./DevicesPage.styld"
import Modal from 'react-modal'


export const DevicesPage = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const customStyle = {};
    return(
        
        <ConteinerStld>
            <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                <h1>Olá</h1>
                <Botao handleClick={handleCloseModal} cordefundo="asaa">
                fechar
                </Botao>
            </Modal>
            <DivDevicespgStld>
                <Title>Dispositivos</Title>
                
                <SubTitle>Nome do dispositivo</SubTitle>

                <DivSearchBarStld>
                    <SearchBar/>
                    <Botao>Pesquisar</Botao>
                </DivSearchBarStld>
            </DivDevicespgStld>

            <GridListDevices>
                
                <Paper>
                    
                    <Logo/>
                    <Paragraph>Device</Paragraph>
                    <Botao handleClick={handleOpenModal}>Adicionar</Botao>
                    
                </Paper>

                <Paper>
                    <Logo/>
                    <Paragraph>asas</Paragraph>
                    <Botao>ASa</Botao>
                </Paper>

                <Paper>
                    <Logo/>
                    <Paragraph>asas</Paragraph>
                    <Botao>ASa</Botao>
                </Paper>

                <Paper>
                    <Logo/>
                    <Paragraph>asas</Paragraph>
                    <Botao>ASa</Botao>
                </Paper>

                <Paper>
                    <Logo/>
                    <Paragraph>asas</Paragraph>
                    <Botao>ASa</Botao>
                </Paper>

            </GridListDevices>
            
        </ConteinerStld>

        
    )

}