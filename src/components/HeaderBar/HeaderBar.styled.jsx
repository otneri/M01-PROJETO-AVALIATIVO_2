import styled from 'styled-components'
import {temaPrincipal} from '../../themes/TemaPrincipal'

export const HeaderStyled =  
    styled.header`
        padding: 1vh 4vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${temaPrincipal.colors.backgroundHeader};
        gap: 5vh;
    `

export const Div = 
    styled.div`
        display: flex;
        gap: 1vh;
        `
export const TitleHeaderStyled =
    styled.h1`
        color: white;
    `
    
