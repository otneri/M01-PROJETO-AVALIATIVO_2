import { createContext, useState } from "react";
import PropTypes from 'prop-types'


export const LogadoContexto = createContext({
    user: null,
    setUser: ()=>{}
})

export const Logado = ({children}) => {
    const [user, setUser] = useState();

    return(
        <LogadoContexto.Provider value={{user, setUser}}>
            {children}
        </LogadoContexto.Provider>
    )
}

Logado.propTypes = {
    children: PropTypes.node
}

