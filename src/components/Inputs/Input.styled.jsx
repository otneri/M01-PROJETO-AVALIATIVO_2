import styled from 'styled-components'
import {temaPrincipal} from '../../themes/TemaPrincipal'

export const InputStyled =  styled.input `
    padding: .7em;

    &:hover{
        border-color: ${temaPrincipal.colors.backgroundHeader};
    }

    
`
