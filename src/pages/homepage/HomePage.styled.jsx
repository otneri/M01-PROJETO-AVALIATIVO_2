import styled from "styled-components";
import { temaPrincipal } from "../../themes";

export const HomeStyled = styled.main``;

export const Paragraph = styled.p`
  color: ${temaPrincipal.text.grey};
  font-weight: bold;
  font-size: larger;
  margin-bottom: 0.5em;
  text-align: center;
`;

export const Pparagraph = styled.p`
  color: ${temaPrincipal.text.grey};
  display: flex;
`;

export const BotoesFiltroDevices = styled.div`
  margin: 2em 0em;
`;

export const GridListDevices = styled.section`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 2fr 2fr 2fr;
  grid-gap: 1em;
`;

export const DivBotaoPowerstld = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;

export const IconeEstilizado = styled.img `
  width: 4em;
  background-color: ${temaPrincipal.colors.softColor};
  margin-top: 1em;
  border-radius: 4em;
`;