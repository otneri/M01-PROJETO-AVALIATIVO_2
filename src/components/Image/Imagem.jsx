import { IconWeather } from "./Imagem.stld"
import PropTypes from "prop-types"

export const IconWeatherStld = ({src, alt}) => {
    <IconWeather src={src} alt={alt}></IconWeather>
}


IconWeatherStld.propTypes = {
    src: PropTypes.node.isRequired,
    alt: PropTypes.string.isRequired
}