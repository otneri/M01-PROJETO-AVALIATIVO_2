import React, {  useState } from "react";
import PropTypes from 'prop-types';
import {temaDark,temaPrincipal} from '../../themes'
import { BotaoFiltroDevice } from "../../components/Botoes/Botao";

export const ContextoTema = React.createContext({
    thema: temaDark,
});

export const TrocaTemas = ({children}) => {

    const [thema, setThema] = useState([]);
  
  
    const handleThema = () => {
        setThema((prev) => {
            const newThema = prev === temaDark ? temaPrincipal : temaDark;
            setThema(newThema)
            return newThema;

        })
    }

    

    const trocaTema = thema === temaDark ? temaDark:temaPrincipal 
    
    console.log(trocaTema);
    
    return (
        <ContextoTema.Provider value={{ theme: thema, handleThema}}>
            <BotaoFiltroDevice handleClick={handleThema}>Mudar Tema</BotaoFiltroDevice>
            {children}
        </ContextoTema.Provider>
    )

} 

TrocaTemas.propTypes = {
    children: PropTypes.node
}