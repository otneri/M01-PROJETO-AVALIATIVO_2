import { Paper } from "../../components/Paper/Paper";
import { Title } from "../../components/Titulo/Titulo";
import { LoginPageStyle } from "./LoginPage.styled";
import { FormLogin } from "../../components/Forms/FormLogin";
// import { useState } from "react";
// import { useAuth } from "../../contexts/Autenticação/index";

export const LoginPage = () => {
  // const [input, setInput] = useState({
  //   nome: "",
  // });

  // const { setUsuario } = useAuth();

  // const handleLogin = () => {
  //   localStorage.setItem("fullName", JSON.stringify(input));
  //   setUsuario(input);
  // };

  return (
    <LoginPageStyle>
      
      <Paper>
        <Title>Acessar</Title>
        <FormLogin />
      </Paper>
    </LoginPageStyle>
  );
};
