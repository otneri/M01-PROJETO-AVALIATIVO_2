import styled from 'styled-components'
import {temaPrincipal} from '../../themes/TemaPrincipal'

export const SubTitleStyled =  styled.h2 `
    color: ${temaPrincipal.text.orangedark};
    font-weight: bold;
    font-size: medium;
`

export const SubParagraphStld = styled.div`
    color: ${temaPrincipal.text.grey};
    display: flex;
    gap: 1em;
    font-size:  ${(props) => props.sz === 'bold'? `${temaPrincipal.text.boldSize}` : ''};
`
