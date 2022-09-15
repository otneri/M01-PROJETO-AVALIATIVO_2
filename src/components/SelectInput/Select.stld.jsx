import styled from "styled-components";
import Modal from "react-modal";
import { temaPrincipal } from "../../themes";

export const SelectStld= styled.select`
    padding: .7em;
    width: 25em;
    &:hover{
        border-color: ${temaPrincipal.colors.backgroundHeader};
    }
        
`
export const OptionStld = styled.option `
    text-transform: uppercase;
`
export const ModalStld = styled.Moda