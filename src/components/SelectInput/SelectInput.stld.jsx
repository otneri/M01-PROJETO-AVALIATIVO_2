import styled from "styled-components";
import { temaPrincipal } from "../../themes";

export const SelectStld = styled.select`
  padding: 0.7em;
  width: 25em;
  &:hover {
    border-color: ${temaPrincipal.colors.backgroundHeader};
  }
`;
export const OptionStld = styled.option`
  text-transform: uppercase;
`;
export const ModalStld = styled.Moda;
