import { BotaoFiltroDevice } from "../../components/Buttons/Button"
import { Paper, PaperDevice } from "../../components/Paper/Paper"
import { Title } from "../../components/Title/Title"
import { HomeStyled, Pparagraph, SubParagraph, Paragraph, BotoesFiltroDevices, GridListDevices } from "./HomePage.styled"


export const HomePage = () => {

    return(
        <HomeStyled>
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
                <PaperDevice/>
                <PaperDevice/>
                <PaperDevice/>
                <PaperDevice/>
                <PaperDevice/>
                <PaperDevice/>
           </GridListDevices>
        </HomeStyled>
    )
}