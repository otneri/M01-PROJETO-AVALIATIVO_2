import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ContextAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nome: "",
  });

  const handleLogin = ({ email, senha }) => {
    console.log(email, senha);
    setUsuario({ nome: "Otavio" });
  };

  useEffect(() => {
    const userStorage = localStorage.getItem("fullName");
    if (userStorage) {
      setUsuario(JSON.parse(userStorage));
    } else {
      setUsuario({
        nome: "",
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("fullName");
    setUsuario({
      nome:''
    })
  };

  return (
    <ContextAuth.Provider
      value={{ isAutenticado: !!usuario, handleLogin, handleLogout }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
