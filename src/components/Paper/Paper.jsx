import {PaperStyled} from './Paper.styled'
import Proptypes from 'prop-types'

export const Paper = ({children}) => {
    return (
        <PaperStyled>{children}</PaperStyled>
    )
}

Paper.propTypes = {
    children : Proptypes.node.isRequired,
}