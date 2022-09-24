import { SubTitle } from "../SubTitle/SubTitulo";
import { ConteinerInput } from "../Inputs/InputComp.styled";
import { Input } from "../Inputs/InputComp";
import { DivBotoes, FormStyle, SpanError } from "./Form.styled";
import { Botao } from "../Botoes/Botao";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import axios from "axios";

// FORMULARIO
const validationSchema = yup.object({
  email: yup.string().required("Campo obrigatório!"),
  password: yup.string().required("Campo obrigatório!"),
});

export const FormLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
// FORMULARIO

// CONFIRMAR USER

  const headers = {
    "Content-Type": "application/json"
  }
  

  const handleConfirmarLogin= (valores) => {
    console.log(valores);
    getPerfilValido(valores)
    .then((response) => {console.log(response)
    .catch((error) => console.log("Ops, algo deu errado: " + error))})};

  const getPerfilValido = (body) => {
    axios.post(handleConfirmarLogin, body, headers)

  }





  // const getPerfilValido = (token, usuario, set) => {
  //   fetch(`https://connectlab.onrender.com/users/${usuario}`, {
  //     method: 'get',
  //     headers: new Headers ({
  //       Authorization: `Bearer ${token}`,
  //     })
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {set(data)
  //     return(data)}
  //   )}

// CONFIRMAR USER







    const linkStyld ={
      cursor: 'pointer',
      textDecoration: 'underline',
      color: '#CA6F1E'
    }


  return (
    <>
      <FormStyle onSubmit={handleSubmit(handleConfirmarLogin, handleConfirmarLogin)}>
        <ConteinerInput>
          <SubTitle>E-mail: </SubTitle>
          <Input {...register("email")} />
          <SpanError>{errors?.email?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Senha: </SubTitle>
          <Input {...register("password")} type="password" />
          <SpanError>{errors?.password?.message}</SpanError>
        </ConteinerInput>
      </FormStyle>

      <DivBotoes>
        <Botao handleClick={handleSubmit(handleConfirmarLogin, handleConfirmarLogin)}>Login</Botao>

        <SubTitle >Não tem conta? <Link to="/cadastro" style={linkStyld}>Cadastre-se</Link></SubTitle>
      </DivBotoes>
    </>
  );
};
