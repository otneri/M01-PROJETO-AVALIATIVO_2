import {PaperStyled} from './Paper.styled'
import Proptypes from 'prop-types'

export const Paper = ({children}) => {
    return (
        <PaperStyled>{children}</PaperStyled>
    )
}


export const PaperListDevices =  ({children}) => {
    return (
        <>{children}</>
    )
}

Paper.propTypes = {
    children : Proptypes.node.isRequired,
}

PaperListDevices.propTypes = {
    children : Proptypes.node.isRequired,
}