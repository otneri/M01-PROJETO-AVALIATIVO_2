import styled from "styled-components";
import { temaPrincipal } from "../../themes";

export const HomeStyled = styled.main`
    
`

export const Paragraph = styled.p`
    color: ${temaPrincipal.text.grey};
    font-weight: bold;
    font-size: larger;
    margin-bottom: .5em;
    text-align: center;
    
`
export const SubParagraph = styled.p`
    color: ${temaPrincipal.text.grey};
    display: flex;
    gap: 1em;
`

export const Comodos = styled.p`
    color: ${temaPrincipal.text.grey};
    display: flex;
    font-size: smaller;
    gap: .3em;
`

export const GridListDevices = styled.section`
    display: grid;
    background-color: green;
    grid-template-columns: 5fr 5fr 5fr;
    grid-template-rows: 2fr 2fr 2fr;
    grid-gap: 1em;
`
export const DivPaperDeviceStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1em;
`