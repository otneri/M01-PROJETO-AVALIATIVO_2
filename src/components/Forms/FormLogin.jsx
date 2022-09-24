import { SubTitle } from "../SubTitle/SubTitulo";
import { ConteinerInput } from "../Inputs/InputComp.styled";
import { Input } from "../Inputs/InputComp";
import { DivBotoes, FormStyle, SpanError } from "./Form.styled";
import { Botao } from "../Botoes/Botao";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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
  const efetuarLogin = `https://connectlab.onrender.com/auth/login`
  const headers = {
    "Content-Type": "application/json"
  }

  const navigate = useNavigate()


  
  const handleConfirmarLogin= (valores) => {
    console.log(valores);
    axios.post(efetuarLogin, valores, headers)
    .then((response) => {
      sessionStorage.setItem('Token', response?.data?.token)
      console.log(response)})
    .catch((erro)=> alert( erro?.response?.data?.error))
    }
    
    
  // const pegaToken = sessionStorage.setItem('token')





  



    const linkStyld ={
      cursor: 'pointer',
      textDecoration: 'underline',
      color: '#CA6F1E'
    }


  return (
    <>
      <FormStyle onSubmit={handleSubmit(handleConfirmarLogin)}>
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
        <Botao handleClick={handleSubmit(handleConfirmarLogin)} navigate='/home'>Login</Botao>

        <SubTitle >Não tem conta? <Link to="/cadastro" style={linkStyld}>Cadastre-se</Link></SubTitle>
      </DivBotoes>
    </>
  );
};
