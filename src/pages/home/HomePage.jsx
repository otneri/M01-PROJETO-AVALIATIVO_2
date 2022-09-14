
import { Logo } from "../../assets/img"
import { Botao, BotaoOnOff } from "../../components/Buttons/Button"
import { Paper } from "../../components/Paper/Paper"
import { Title } from "../../components/Title/Title"
import { HomeStyled, Paragraph, SubParagraph, GridListDevices, Comodos, DivPaperDeviceStyled } from "./HomePage.styled"


export const HomePage = () => {

    return(
        <HomeStyled>
            <Paper>
                <Title>16° C</Title>
                <Paragraph>Pato Branco, PR</Paragraph>
                <SubParagraph>
                    <p>Sensação térmica: 15ºC</p>
                    <p>Precipitação: 0mm</p>
                    <p>Chance de chuva: 0%</p>
                </SubParagraph>
            </Paper>

            <Botao/>
            <GridListDevices>
                <Paper>
                    <DivPaperDeviceStyled>
                        <Logo/>
                        <div>
                            <Paragraph>Lâmpada</Paragraph>
                            <Comodos>
                                <p>Casa</p> {`-`}
                                <p>Quarto</p> {`-`}
                                <p>ON</p>
                            </Comodos>
                        </div>
                        <BotaoOnOff>On</BotaoOnOff>
                    </DivPaperDeviceStyled>
                </Paper>
                

                <Paper>
                    <DivPaperDeviceStyled>
                        <Logo/>
                        <div>
                            <Paragraph>Lâmpada</Paragraph>
                            <Comodos>
                                <p>Casa</p> {`-`}
                                <p>Quarto</p> {`-`}
                                <p>ON</p>
                            </Comodos>
                        </div>
                        <BotaoOnOff>On</BotaoOnOff>
                    </DivPaperDeviceStyled>
                </Paper>

                <Paper>
                    <DivPaperDeviceStyled>
                        <Logo/>
                        <div>
                            <Paragraph>Lâmpada</Paragraph>
                            <Comodos>
                                <p>Casa</p> {`-`}
                                <p>Quarto</p> {`-`}
                                <p>ON</p>
                            </Comodos>
                        </div>
                        <BotaoOnOff>On</BotaoOnOff>
                    </DivPaperDeviceStyled>
                </Paper>

                <Paper>
                    <DivPaperDeviceStyled>
                        <Logo/>
                        <div>
                            <Paragraph>Lâmpada</Paragraph>
                            <Comodos>
                                <p>Casa</p> {`-`}
                                <p>Quarto</p> {`-`}
                                <p>ON</p>
                            </Comodos>
                        </div>
                        <BotaoOnOff>On</BotaoOnOff>
                    </DivPaperDeviceStyled>
                </Paper>
                <Paper>
                    <DivPaperDeviceStyled>
                        <Logo/>
                        <div>
                            <Paragraph>Lâmpada</Paragraph>
                            <Comodos>
                                <p>Casa</p> {`-`}
                                <p>Quarto</p> {`-`}
                                <p>ON</p>
                            </Comodos>
                        </div>
                        <BotaoOnOff>On</BotaoOnOff>
                    </DivPaperDeviceStyled>
                </Paper>

            </GridListDevices>

        
        </HomeStyled>
    )
}