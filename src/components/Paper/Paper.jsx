import {PaperStyled, Comodos, DivPaperDeviceStyled} from './Paper.styled'
import {BotaoOnOff} from '../Buttons/Button'
import Proptypes from 'prop-types'
import { Logo } from '../../assets/img'
import { Paragraph } from '../../pages/home/HomePage.styled'

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

export const PaperDevice = () => {

    return (

        
        <Paper>
            <DivPaperDeviceStyled>
                <Logo/>
                <div>
                    <Paragraph>Lâmpada</Paragraph>
                    <Comodos>
                        <p>Casa</p> {`-`}
                        <p>Quarto</p> {`-`}
                        <p>ON</p>
                    </Comodos>
                </div>
                <BotaoOnOff>On</BotaoOnOff>
            </DivPaperDeviceStyled>
        </Paper>

    )

} 


Paper.propTypes = {
    children : Proptypes.node.isRequired,
}

PaperListDevices.propTypes = {
    children : Proptypes.node.isRequired,
}