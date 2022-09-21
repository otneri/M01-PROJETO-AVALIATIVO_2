import styled from "styled-components";
import { temaPrincipal } from "../../themes/TemaPrincipal";

export const InputStyled = styled.input`
  padding: 0.7em;
  width: 25em;
  &:hover {
    border-color: ${temaPrincipal.colors.backgroundHeader};
  }
  border-style: solid;
`;
export const ConteinerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const InputErrorStyled = styled.input`
  padding: 0.7em;
  width: 25em;
  border-color: ${temaPrincipal.colors.error};
  border-style: solid;
`;
