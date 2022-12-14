import { useState, useEffect } from "react";
import {
  Botao,
  BotaoFiltroDevice,
  BotaoOnOff,
} from "../../components/Botoes/Botao";
import { Paper, PaperDevice } from "../../components/Paper/Paper";
import { Title } from "../../components/Titulo/Titulo";
import Modal from "react-modal";
import {
  HomeStyled,
  Pparagraph,
  Paragraph,
  BotoesFiltroDevices,
  GridListDevices,
  DivBotaoPowerstld,
  IconeEstilizado,
} from "./HomePage.styled";
import { Logo } from "../../assets/img";
import { SubParagraph } from "../../components/SubTitle/SubTitulo";
import { useLogado } from "../../contexts/Logado/useLogado";
import { useAuth } from "../../contexts/Autenticação/useAuth";
import axios from "axios";
import { PaperStyled, DivPaperDeviceStyled, Comodos } from "../../components/Paper/Paper.styled";

export const HomePage = () => {
  const { user } = useLogado();
  const { token } = useAuth();

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

  const city = sessionStorage.getItem("Cidade");
  const [wether, setWether] = useState([]);
  const [meusdevices, setMeusdevices] = useState([]);

  useEffect(() => {
    getWetherData();
  }, []);

  const getWetherData = async () => {
    const dados = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},br&units=metric&APPID=d5151cdb3fa13b265ad28b66e3220361`,
    );
    const converter = await dados.json();
    setWether({
      nome: converter.name,
      temperatura: `${parseInt(converter.main.temp)}`,
      umidade: `${converter.main.humidity}%`,
      velocidade: `${converter.wind.speed} Km/h`,
      sensacao: `${parseInt(converter.main.feels_like)}`,
      pais: `${converter.sys.country}`,
      condicao: converter.weather[0].description,
      icone: `http://openweathermap.org/img/wn/${converter.weather[0].icon}.png`,
    });
  };

  const connectListaDevices = `https://connectlab.onrender.com/userDevices/user/:${user}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getDevicesUser = () => {
    axios
      .get(connectListaDevices, { headers })
      .then((resp) => {
        setMeusdevices(resp.data);
        console.log(resp);
      })
      .catch((err) => console.log(err));
  };

  return (
    <HomeStyled onLoad={(getWetherData, getDevicesUser)}>
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
        <Title>{wether.temperatura}&deg; C</Title>
        <Paragraph>
          {wether.nome}, {wether.pais}{" "}
        </Paragraph>
        <SubParagraph>
          <Pparagraph>Sensação térmica: {wether.sensacao}&deg;C</Pparagraph>
          <Pparagraph>Velocidade do vento: {wether.velocidade}</Pparagraph>
          <Pparagraph>Umidade: {wether.umidade} </Pparagraph>
        </SubParagraph>
        <IconeEstilizado src={wether.icone} alt="icone" />
      </Paper>

      <BotoesFiltroDevices>
        <BotaoFiltroDevice>Todos</BotaoFiltroDevice>
        <BotaoFiltroDevice>Casa</BotaoFiltroDevice>
        <BotaoFiltroDevice>Escritório</BotaoFiltroDevice>
      </BotoesFiltroDevices>

      <GridListDevices>


        <PaperDevice handleclick={handleOpenModal} />

        {meusdevices.map((device, id) => (
          
        <PaperStyled key={id} onClick={()=>{}}>
            <DivPaperDeviceStyled>
            <Logo />
            <div>
              <Paragraph>asdas</Paragraph>
              <Comodos>
                <p>Casa</p> {`-`}
                <p>Quarto</p> {`-`}
                <p>ON</p>
              </Comodos>
            </div>
            <BotaoOnOff>On</BotaoOnOff>
          </DivPaperDeviceStyled>
        </PaperStyled>
    ))}
      </GridListDevices>
    </HomeStyled>
  );
};
