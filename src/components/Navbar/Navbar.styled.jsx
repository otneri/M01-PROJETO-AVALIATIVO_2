import styled from 'styled-components'
// import {temaPrincipal} from '../../themes/TemaPrincipal'

export const NavStyled =  
    styled.nav `
        display: flex;
        align-items: center;
        justify-content: space-around;
    `
export const UlStyled =
    styled.ul`
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 1em;
    `
export const LiStyled = 
    styled.li`
        list-style: none;
    `
export const AStyled = 
    styled.a`
    color: white;
    text-decoration: none;

    &:hover{
        color:#2E4052;
    }
    `
    

    
