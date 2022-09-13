import styled from 'styled-components'
import {temaPrincipal} from '../../themes/TemaPrincipal'

export const BotaoStyled =  styled.button `
    background-color: ${temaPrincipal.colors.backgroundHeader};
    color: ${temaPrincipal.text.white};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2vh;
    border: none;
    padding: .5em;
    width: 7em;
    border-radius: 1em;
    cursor: pointer;

    &:hover {
        color: ${temaPrincipal.text.orange};
        background-color: #2E4052;
    }
`
export const BotaoStyledLogin =  styled.button `
    background-color: #2E4052;
    color: ${temaPrincipal.text.white};
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    padding: .5em;
    width: 7em;
    border-radius: 1em;
    cursor: pointer;

    &:hover {
        color: ${temaPrincipal.text.orange};
        background-color: #2e4052b0;
    }
`