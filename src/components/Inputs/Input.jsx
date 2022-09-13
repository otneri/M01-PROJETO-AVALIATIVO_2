import {InputStyled} from './Input.styled'
import Proptypes from 'prop-types'
import { SubTitle } from '../SubTitle/SubTitle'

export const Input = ({children}) => {


    return(
        <>
            <SubTitle>{children}</SubTitle>
            <InputStyled></InputStyled>
        </>

    )
}


Input.propTypes = {
    children : Proptypes.node.isRequired,
}