import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const ContextAuth = createContext();

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);

    const handleLogin = ({email, senha}) => {
        console.log(email, senha);
        setUsuario({nome: 'Otavio', email: 'otavioneri@gmail'});
    }

    const handleLogout = () => {
        setUsuario(null);
    };

    return (
        <ContextAuth.Provider value={{isAutenticado: !!usuario , handleLogin, handleLogout}}>
            {children}
        </ContextAuth.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}