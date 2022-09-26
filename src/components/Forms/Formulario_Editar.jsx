import { Input } from "../Inputs/InputComp";
import { FormStyle, SpanError, DivBotoes } from "./Form.styled";
import { useForm } from "react-hook-form";
import { Botao, BotaoLinkPaper } from "../Botoes/Botao";
import { ConteinerInput, InputErrorStyled } from "../Inputs/InputComp.styled";
import { SubTitle } from "../SubTitle/SubTitulo";
import { PhoneNumber, FullName, CepDigitos } from "../../utils/validations";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLogado } from "../../contexts/Logado/useLogado";
import { useAuth } from "../../contexts/Autenticação/useAuth";

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(2, "Mínimo 2 catactéres")
    .matches(FullName, "Apenas letras")
    .required("Campo obrigatório"),
  emaill: yup.string().email("Campo obrigatório"),
  photoURL: yup.string(),
  phone: yup.string().required("Campo obrigatório").matches(PhoneNumber),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Mínimo 8 caracteres."),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "Senha incompatível"),
  userAddress: yup.object({
    zipCode: yup.string("Apenas números!").required("Campo obrigatório"),
    // .matches(CepDigitos, "Apenas números."),
    street: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    complement: yup.string(),
    number: yup.string().required("Campo obrigatório"),
    neighborhood: yup.string().required("Campo obrigatório"),
  }),
});

export const FormEdita = () => {
  const { user } = useLogado();
  console.log(user, "user");
  const { token } = useAuth();
  console.log(token);
  // Yup FORM

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({ resolver: yupResolver(validationSchema) });

  function onError(erro) {
    console.log("erro: ", erro);
  }

  const preencheCep = (ev) => {
    const newCep = ev.target.value.replace(/\D/g, "");
    console.log(newCep);
    fetch(`https://viacep.com.br/ws/${newCep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("userAddress.street", data.logradouro);
        setValue("userAddress.city", data.localidade);
        setValue("userAddress.state", data.uf);
        setValue("userAddress.complement", data.complemento);
        setValue("userAddress.neighborhood", data.bairro);
        setFocus("userAddress.number");
      });
  };

  const editarUser = `https://connectlab.onrender.com/users/:${user}`;
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im90YXZpb25lcmk0N0BnbWFpbC5jb20iLCJmdWxsTmFtZSI6IkF1Z3VzdG8gUmliZWlybyBOZXJpIiwiX2lkIjoiNjMyZTcyOTVlZDhhNzQ1NmU5NzlmMjg0IiwiaWF0IjoxNjY0MTA4NDI0fQ.2N3a7EOYvlnLoYckj99GoRRxEN6rExyDFOk0YC5dQ0o'

  const headersBuscaUser = {
    Authorization: `Bearer ${token}`,
  };
 

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const handleAlterarCadastro = (valores) => {
    axios
      .put(editarUser, valores, { headers })
      .then((response) => {
        console.log(response, "response");
      })
      .catch((erro) => alert(erro?.response?.data?.error));
  };

  // SOBE USER PARA API

  return (
    <div>
      <FormStyle onSubmit={handleSubmit( onError, handleAlterarCadastro)}>
        <ConteinerInput>
          <SubTitle>Nome completo: </SubTitle>
          {errors?.fullName?.type ? (
            <InputErrorStyled
              {...register("fullName", { required: true })}
              placeholder="Seu nome aqui"
              id={"nome"}
            />
          ) : (
            <Input
              {...register("fullName", { required: true })}
              placeholder="Seu nome aqui"
              id={"nome"}
            />
          )}

          <SpanError>{errors?.fullName?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>E-mail:</SubTitle>
          {errors?.email?.type ? (
            <InputErrorStyled
              {...register("email", { required: true })}
              placeholder="exemplo@exemplo.com"
              id={"email"}
            />
          ) : (
            <Input
              {...register("email", { required: true })}
              placeholder="Seu nome aqui"
              id={"email"}
            />
          )}

          <SpanError>{errors?.email?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Foto de Perfil </SubTitle>
          <Input
            {...register("photoUrl", { required: true })}
            placeholder="Adicione uma foto"
            id={"photo"}
          />
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Telefone:</SubTitle>
          {errors?.phone?.type ? (
            <InputErrorStyled
              {...register("phone", { required: true })}
              placeholder="(DDD)912345678"
              id={"phone"}
              type="tel"
            />
          ) : (
            <Input
              {...register("phone", { required: true })}
              placeholder="(DDD) 91234-5678"
              id={"phone"}
              type="tel"
            />
          )}

          {errors?.phone?.type && <SpanError>Telefone inválido!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Senha:</SubTitle>
          {errors?.password?.type ? (
            <InputErrorStyled
              {...register("password", { required: true })}
              placeholder="Insira um telefone"
              id={"password"}
              type="password"
            />
          ) : (
            <Input
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Insira uma senha"
              id={"password"}
              type="password"
            />
          )}

          <SpanError>{errors?.password?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Confirmar Senha:</SubTitle>
          {errors?.passwordConfirm?.type ? (
            <InputErrorStyled
              {...register("passwordConfirm", { required: true })}
              placeholder="Insira um telefone"
              id={"passwordConfirm"}
              type="password"
            />
          ) : (
            <Input
              {...register("passwordConfirm", { required: true })}
              placeholder="Insira uma senha"
              id={"passwordConfirm"}
              type="password"
            />
          )}

          <SpanError>{errors.passwordConfirm?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>CEP:</SubTitle>
          {errors?.zipCode?.type ? (
            <InputErrorStyled
              {...register("userAddress.zipCode", { required: true })}
              placeholder="Apenas números!"
              id={"CEP"}
              onBlur={preencheCep}
            />
          ) : (
            <Input
              {...register("userAddress.zipCode", { required: true })}
              placeholder="Digite o CEP aqui"
              id={"CEP"}
              onBlur={preencheCep}
            />
          )}

          <SpanError>{errors?.zipCode?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Endereço:</SubTitle>
          {errors?.street?.type ? (
            <InputErrorStyled
              {...register("userAddress.street", { required: true })}
              placeholder="Seu endereço aqui"
              id={"endereco"}
            />
          ) : (
            <Input
              {...register("userAddress.street", { required: true })}
              placeholder="Seu endereço aqui"
              id={"endereco"}
            ></Input>
          )}

          <SpanError>{errors?.street?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Cidade:</SubTitle>
          {errors?.city?.type ? (
            <InputErrorStyled
              {...register("userAddress.city", { required: true })}
              placeholder="Sua cidade aqui"
              id={"cidade"}
            />
          ) : (
            <Input
              {...register("userAddress.city", { required: true })}
              placeholder="Sua cidade aqui"
              id={"cidade"}
            />
          )}

          <SpanError>{errors?.city?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Estado:</SubTitle>
          {errors?.state?.type ? (
            <InputErrorStyled
              {...register("userAddress.state", { required: true })}
              placeholder="Seu estado aqui"
              id={"state"}
            />
          ) : (
            <Input
              {...register("userAddress.state", { required: true })}
              placeholder="Seu estado aqui"
              id={"state"}
            />
          )}

          <SpanError>{errors?.state?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Complemento:</SubTitle>
          <Input
            {...register("userAddress.complement", { required: true })}
            placeholder="Seu complemento aqui"
            id={"complemento"}
          />
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Número:</SubTitle>
          {errors?.number?.type ? (
            <InputErrorStyled
              {...register("userAddress.number", { required: true })}
              placeholder="Número da casa aqui"
              id={"number"}
            />
          ) : (
            <Input
              {...register("userAddress.number", { required: true })}
              placeholder="Seu numero aqui"
              id={"number"}
            />
          )}

          <SpanError>{errors?.number?.message}</SpanError>
        </ConteinerInput>

        <ConteinerInput>
          <SubTitle>Bairro:</SubTitle>
          {errors?.neighborhood?.type ? (
            <InputErrorStyled
              {...register("userAddress.neighborhood", { required: true })}
              placeholder="Seu bairro aqui"
              id={"neighborhood"}
            />
          ) : (
            <Input
              {...register("userAddress.neighborhood", { required: true })}
              placeholder="Seu bairro aqui"
              id={"neighborhood"}
            />
          )}

          <SpanError>{errors?.neighborhood?.message}</SpanError>
        </ConteinerInput>
      </FormStyle>

      <DivBotoes>
        <Botao
          type="submit"
          handleClick={handleSubmit(handleAlterarCadastro, onError)}
        >
          Salvar
        </Botao>
      </DivBotoes>
    </div>
  );
};
