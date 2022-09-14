import { Logo } from "../../assets/img"
import { Botao } from "../../components/Buttons/Button"
import { Paper } from "../../components/Paper/Paper"
import { SubTitle } from "../../components/SubTitle/SubTitle"
import { Title } from "../../components/Title/Title"
import { GridListDevices, Paragraph } from "../home/HomePage.styled"
import { ConteinerStld, DivDevicespgStld, DivSearchBarStld, SearchBar } from "./DevicesPage.styld"


export const DevicesPage = () => {

    return(
        <ConteinerStld>
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
                    <Botao>Adicionar</Botao>
                    
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