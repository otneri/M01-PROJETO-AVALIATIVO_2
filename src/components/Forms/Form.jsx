import { Input } from "../Inputs/Input";
import { FormStyle } from "./Form.styled";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cadastrarUsuario = (data) => console.log(data);

  const handleChange = () => {
    form[event.target.name] = event.target.value;
  };
  const form = {};
  console.log(form);
  return (
    <FormStyle onSubmit={handleSubmit}>
      <Input placeholder="Seu nome aqui" name="nome" onChange={handleChange}>
        Nome completo:
      </Input>
      <Input placeholder="Seu e-mail" name="email" type="e-mail">
        E-mail:
      </Input>
      <Input placeholder="Adicione uma foto" name="foto" type="URL">
        URL foto perfil:
      </Input>
      <Input placeholder="Seu telefone aqui" name="tel" type="fone">
        Telefone:
      </Input>
      <Input placeholder="Sua senha aqui" name="password" type="password">
        Senha:
      </Input>
      <Input
        placeholder="Confirme a senha"
        name="passwordConfirm"
        type="password"
      >
        Confirmação de senha:
      </Input>
      <Input placeholder="Digite o CEP aqui" name="cep">
        CEP:
      </Input>
      <Input placeholder="Seu endereço aqui" name="endereco">
        Logradouro/Endereço:
      </Input>
      <Input placeholder="Sua cidade aqui" name="cidade">
        Cidade:
      </Input>
      <Input placeholder="Seu Estado aqui" type="state" name="estado">
        Estado:
      </Input>
      <Input placeholder="Seu complemento aqui" name="complemento">
        Complemento:
      </Input>
      <Input placeholder="Número da casa aqui" name="numero">
        Número:
      </Input>
      <Input placeholder="Seu bairro aqui" name="bairro">
        Bairro:
      </Input>
    </FormStyle>
  );
};
