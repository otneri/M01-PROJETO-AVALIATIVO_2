import styled from "styled-components";

export const PerfilPageStyle = styled.section`
  color: ${(theme)=>theme.text.orangedark};
  font-weight: bold;
  font-size: medium;
`;

export const ConteinerProfileStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const TextoMaior = styled.p`
  color: #495057;
  font-size: small;
`;
export const TextoMenor = styled.p`
  color: #5d6d7e;
  font-size: smaller;
`;

export const DivPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1em;
`;

export const SubDivPerfil = styled.div`
  display: flex;
`;

export const Line = styled.hr`
  color: ${({theme})=>theme.text.black};
  size: 1em;
  border: 1em;
`;
