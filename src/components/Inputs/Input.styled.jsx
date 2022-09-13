import styled from 'styled-components'
import {temaPrincipal} from '../../themes/TemaPrincipal'

export const InputStyled =  styled.input `
    padding: .7em;
    width: 25em;
    &:hover{
        border-color: ${temaPrincipal.colors.backgroundHeader};
    }

    
`
export const ConteinerInput = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
