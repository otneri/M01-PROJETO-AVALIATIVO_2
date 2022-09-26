import { useState,createContext } from "react";

import PropTypes from "prop-types";

export const ContextDados = createContext({
    userdados: null,
    setUserdados: () => {},
});


export const DadosProvider = ({ children }) => {
  const [userdados, setUserdados] = useState(sessionStorage.getItem("Dados"));

  

  return (
    <ContextDados.Provider value={{ userdados, setUserdados }}>
      {children}
    </ContextDados.Provider>
  );
};

DadosProvider.propTypes = {
  children: PropTypes.node,
};