import React, {  useState } from "react";
import PropTypes from 'prop-types';
import {temaDark,temaPrincipal} from '../../themes'
import { BotaoFiltroDevice } from "../../components/Botoes/Botao";

export const ContextoTema = React.createContext({
    theme: temaDark,
});

export const TrocaTemas = ({children}) => {

    const [theme, setTheme] = useState([]);
  
  
    const handleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === temaDark ? temaPrincipal : temaDark;
            setTheme(newTheme)
            return newTheme;

        })
    }

    console.log(theme);

    const trocaTema = theme === 'dark'? temaDark:temaPrincipal 
    

    
    return (
        <ContextoTema.Provider value={{theme: trocaTema, handleTheme}}>
            {children}
            <BotaoFiltroDevice handleClick={handleTheme}>Mudar Tema</BotaoFiltroDevice>
        </ContextoTema.Provider>
    )

} 

TrocaTemas.propTypes = {
    children: PropTypes.node
}