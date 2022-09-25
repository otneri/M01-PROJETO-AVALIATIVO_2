import styled from "styled-components";

export const ConteinerStld = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const DivDevicespgStld = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 3em 0em;
`;
export const SearchBar = styled.input`
  width: 90%;
  padding: 0em 1em;
  border: solid;
  border-color: ${({theme})=>theme.color.border};
`;
export const DivSearchBarStld = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 0.5em;
  margin: 1em 0em;
`;

export const DivPaperDevice = styled.div`
  padding: 1em 2em;
`;

export const DivButtonsModalStld = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10em;
`;

export const ImgStld = styled.img`
  width: 6em;
`