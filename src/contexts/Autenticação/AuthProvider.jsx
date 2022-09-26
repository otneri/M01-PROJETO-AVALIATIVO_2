import { useState } from "react";
import { ContextAuth } from "./ContextAuth";
import PropTypes from "prop-types";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem("Token"));

  

  return (
    <ContextAuth.Provider value={{ token, setToken }}>
      {children}
    </ContextAuth.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
