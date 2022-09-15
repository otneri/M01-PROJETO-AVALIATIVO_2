import styled from 'styled-components'
import {temaPrincipal} from '../../themes/TemaPrincipal'

export const PaperStyled =  styled.section `
    background-color: ${temaPrincipal.colors.cardBackground};
    color: ${temaPrincipal.text.orange};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1em;
    cursor: pointer;
`

export const Comodos = styled.div`
    color: ${temaPrincipal.text.grey};
    display: flex;
    font-size: smaller;
    gap: .3em;
`





export const DivPaperDeviceStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1em;
`