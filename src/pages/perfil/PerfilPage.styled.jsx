import styled from 'styled-components'
import {temaPrincipal} from '../../themes/TemaPrincipal'

export const PerfilPageStyle =  styled.section `
    color: ${temaPrincipal.text.orangedark};
    font-weight: bold;
    font-size: medium;
    
    `;

export const ConteinerProfileStyled = styled.div`
    
    display: flex;
    align-items: center;
    gap: .5em;

`

export const TextoMaior =  styled.p `
    color: #495057;
    font-size: small;
    

`
export const TextoMenor = styled.p`
    color:#5D6D7E;
    font-size: smaller;
`

export const DivPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 1em;

`

export const SubDivPerfil = styled.div `
    display: flex;

`

export const Line = styled.hr`
    color: black;
    size: 1em;
    border: 1em;
` 