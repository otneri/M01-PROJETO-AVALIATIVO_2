import { useAuth } from "../contexts/index";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const RotaPrivada = ({ children }) => {
  const { isAutenticado } = useAuth();
  return isAutenticado ? children : <Navigate to="/" />;
};

RotaPrivada.propTypes = {
  children: PropTypes.node,
};
