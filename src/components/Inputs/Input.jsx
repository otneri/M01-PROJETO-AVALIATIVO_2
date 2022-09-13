import {InputStyled} from './Input.styled'
import Proptypes from 'prop-types'
import { SubTitle } from '../SubTitle/SubTitle'

export const Input = ({children}) => {

    return(
        <>
            <SubTitle>{children}</SubTitle>
            <InputStyled placeholder='Seu e-mail'></InputStyled>
        </>

    )
}


Input.propTypes = {
    children : Proptypes.node,
}