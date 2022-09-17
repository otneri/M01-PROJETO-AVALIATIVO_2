import styled from 'styled-components'
import { temaPrincipal } from '../../themes/TemaPrincipal'

export const FormStyle = styled.form `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em; 
    margin: 2em 0em;
    
    `


export const SpanError = styled.span `
    color: ${temaPrincipal.colors.error};
`
    
    