import { SubTitle } from "../SubTitle/SubTitulo";
import { ConteinerInput } from "../Inputs/InputComp.styled";
import { Input } from "../Inputs/InputComp";
import { DivBotoes, FormStyle, SpanError } from "./Form.styled";
import { Botao, BotaoLinkPaper } from "../Botoes/Botao";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

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

  const handleConfirmarForm = (valores) => {
    console.log(valores);
  };

  const buscarPerfil = (token, usuario, set) => {
    fetch(`https://connectlab.onrender.com/users/${usuario}`, {
      method: 'get',
      headers: new Headers ({
        Authorization: `Bearer ${token}`,
      })
    })
    .then((response) => response.json())
    .then((data) => {set(data)
      return(data)}
    )  


  }


  return (
    <>
      <FormStyle onSubmit={handleSubmit(handleConfirmarForm, buscarPerfil)}>
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
        <Botao handleClick={handleSubmit(handleConfirmarForm, buscarPerfil)}>Login</Botao>

        <Link to="/cadastro">Cadastre-se</Link>
      </DivBotoes>
    </>
  );
};
