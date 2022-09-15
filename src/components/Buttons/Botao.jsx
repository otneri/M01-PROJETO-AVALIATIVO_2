import {
  BotaoLinkStiled,
  BotaoOnOffStyled,
  BotaoStyled,
  BotaoStyledLogin,
  BotaoFiltroDeviceStld,
} from "./Botao.styles";

import Proptypes from "prop-types";

export const Botao = ({ children, handleClick, cordefundo }) => {
  return (
    <BotaoStyled onClick={handleClick} bg={cordefundo}>
      {children}
    </BotaoStyled>
  );
};
export const BotaoLogin = ({ children, handleClick }) => {
  return <BotaoStyledLogin onClick={handleClick}>{children}</BotaoStyledLogin>;
};

export const BotaoOnOff = ({ children, handleClick }) => {
  return <BotaoOnOffStyled onClick={handleClick}>{children}</BotaoOnOffStyled>;
};

export const BotaoLinkPaper = ({ children, handleClick }, funcao) => {
  return <BotaoLinkStiled onClick={handleClick}>{children}</BotaoLinkStiled>;
};

export const BotaoFiltroDevice = ({ children, handleClick }) => {
  return (
    <BotaoFiltroDeviceStld onClick={handleClick}>
      {children}
    </BotaoFiltroDeviceStld>
  );
};

Botao.propTypes = {
  children: Proptypes.node.isRequired,
  handleClick: Proptypes.func,
  cordefundo: Proptypes.string,
};

BotaoLogin.propTypes = {
  children: Proptypes.node.isRequired,
  handleClick: Proptypes.func,
};

BotaoLinkPaper.propTypes = {
  children: Proptypes.node.isRequired,
  handleClick: Proptypes.func,
};

BotaoOnOff.propTypes = {
  children: Proptypes.node.isRequired,
  handleClick: Proptypes.func,
};

BotaoFiltroDevice.propTypes = {
  children: Proptypes.node.isRequired,
  handleClick: Proptypes.func
};
