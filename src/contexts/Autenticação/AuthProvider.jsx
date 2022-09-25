import {  useState } from "react";
import {ContextAuth} from './ContextAuth'
import PropTypes from "prop-types";



export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('Token'));

  // const handleLogin = ({ email, senha }) => {
  //   console.log(email, senha);
  //   setUsuario({ nome: "Otavio" });
  // };

  // useEffect(() => {
  //   const userStorage = localStorage.getItem("fullName");
  //   if (userStorage) {
  //     setUsuario(JSON.parse(userStorage));
  //   } else {
  //     setUsuario({
  //       nome: "",
  //     });
  //   }
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("fullName");
  //   setUsuario({
  //     nome: "",
  //   });
  // };

  return (
    <ContextAuth.Provider
      value={{ token, setToken }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
