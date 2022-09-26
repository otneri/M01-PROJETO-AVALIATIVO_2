import { Paper } from "../../components/Paper/Paper";
import { Title } from "../../components/Titulo/Titulo";
import { Link } from "react-router-dom";
import { LoginPageStyle } from "./LoginPage.styled";
import { FormLogin } from "../../components/Forms/FormLogin";
import { SubTitle } from "../../components/SubTitle/SubTitulo";
// import { useState } from "react";

export const LoginPage = () => {
 

  return (
    <LoginPageStyle>
      <Paper>
        <Title>Acessar</Title>
        <FormLogin />
      </Paper>
    </LoginPageStyle>
  );
};
