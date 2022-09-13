import {SubTitleStyled} from './SubTitle.styled'
import Proptypes from 'prop-types'

export const SubTitle = ({children}) => {
    return (
        <SubTitleStyled>{children}</SubTitleStyled>
    )
}

SubTitle.propTypes = {
    children : Proptypes.node.isRequired,
}