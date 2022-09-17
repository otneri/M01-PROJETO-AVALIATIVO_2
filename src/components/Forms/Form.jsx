import { Input } from "../Inputs/Input";
import { FormStyle, SpanError } from "./Form.styled";
import { useForm } from "react-hook-form";
import { Botao, BotaoLinkPaper } from "../Buttons/Botao";
import { ConteinerInput, InputErrorStyled } from "../../components/Inputs/Input.styled";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import {PhoneNumber} from '../../utils/validations'
import * as yup from 'yup'

const validationSchema = yup.object({
  fullName: yup.string().required(),
  emaill: yup.string().email().required(),
  photoURL: yup.string(),
  phone: yup.matches(PhoneNumber),
  password: yup.string().required(),
  passwordConfirm: yup.string().required(),
  zipCode: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  complement: yup.string().required(),
  number: yup.string().required(),
  neighborhood: yup.string().required(),
})


export const Form = () => {
  const {  handleSubmit, register, formState : {errors} } = useForm();
  
  
  
  const handleConfirmarForm = (valores) => {
    console.log(valores);
  }

  const requiredErrors =  errors.name?.type  === 'required';

  const passwordErrors = (name) =>
    name.password?.type !== name.passwordConfirm?.type? errors.passwordConfirm.type:'' ;
  
  
  return (
    <div>
      <FormStyle onSubmit={handleSubmit(handleConfirmarForm)}>
        <ConteinerInput>
        <SubTitle>Nome completo:  </SubTitle>
        {requiredErrors? <InputErrorStyled
        {...register ('fullName',{required:true })} 
        placeholder="Seu nome aqui"
        id={'nome'}/>:
          <Input {...register ('fullName',{required:true})} 
          placeholder="Seu nome aqui"
          id={'nome'}
          />}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>E-mail </SubTitle>
        {requiredErrors? <InputErrorStyled
        {...register ('email',{required:true})} 
        placeholder="Seu e-mail aqui"
        id={'email'}/>:
          <Input {...register ('fullName',{required:true})} 
          placeholder="Seu e-mail aqui"
          id={'email'}
          />}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Foto de Perfil </SubTitle>
        {requiredErrors? <InputErrorStyled
        {...register ('photoUrl',{required:false})} 
        placeholder="Adicione uma foto"
        id={'photo'}/>:
          <Input {...register ('fullName',{required:true})} 
          placeholder="Adicione uma foto"
          id={'photo'}
          />}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Telefone:</SubTitle>
        {requiredErrors? <InputErrorStyled
        {...register ('phone',{required:true})} 
        placeholder="Insira um telefone"
        id={'email'}/>:
          <Input {...register ('phone',{required:true})} 
          placeholder="Insira um telefone"
          id={'phone'}
          
          />}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Senha:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('password',{required:true})} 
        placeholder="Insira um telefone"
        id={'password'}
        type='password'/>:
          <Input {...register ('password',{required:true, minLength: 6, validate: })} 
          placeholder="Insira uma senha"
          id={'phopassword'}
          type='password'/>}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>
        
        <ConteinerInput>
        <SubTitle>Confirmar Senha:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('passwordConfirm',{required:true})} 
        placeholder="Insira um telefone"
        id={'passwordConfirm'}
        type='password'/>:
          <Input {...register ('passwordConfirm',{required:true})} 
          placeholder="Insira uma senha"
          id={'passwordConfirm'}
          type='password'/>}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>CEP:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('zipCode',{required:true})} 
        placeholder="Digite o CEP aqui"
        id={'CEP'}
        />:
          <Input {...register ('zipCode',{required:true})} 
          placeholder="Digite o CEP aqui"
          id={'CEP'}
          />}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Endereço:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('street',{required:true})} 
        placeholder="Seu endereço aqui"
        id={'endereco'}/>:
          <Input {...register ('street',{required:true})} 
          placeholder="Seu endereço aqui"
          id={'endereco'}/>}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Cidade:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('city',{required:true})} 
        placeholder="Sua cidade aqui"
        id={'cidade'}/>:
          <Input {...register ('city',{required:true})} 
          placeholder="Sua cidade aqui"
          id={'cidade'}/>}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Estado:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('state',{required:true})} 
        placeholder="Seu estado aqui"
        id={'state'}/>:
          <Input {...register ('state',{required:true})} 
          placeholder="Seu estado aqui"
          id={'state'}/>}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Complemento:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('complement',{required:true})} 
        placeholder="Seu complemento aqui"
        id={'complemento'}/>:
          <Input {...register ('complement',{required:true})} 
          placeholder="Seu complemento aqui"
          id={'complemento'}/>}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Número:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('number',{required:true})} 
        placeholder="Número da casa aqui"
        id={'number'}/>:
          <Input {...register ('number',{required:true})} 
          placeholder="Seu numero aqui"
          id={'number'}/>}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Bairro:</SubTitle>
        {requiredErrors? <InputErrorStyled 
        {...register ('neighborhood',{required:true})} 
        placeholder="Seu bairro aqui"
        id={'neighborhood'}/>:
          <Input {...register ('neighborhood',{required:true})} 
          placeholder="Seu bairro aqui"
          id={'neighborhood'}/>}
          
        {requiredErrors && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>


      </FormStyle> 

      <Botao type="submit" handleClick={handleSubmit(handleConfirmarForm)}>
        Cadastrar
      </Botao>

      <BotaoLinkPaper href="/">Login</BotaoLinkPaper>
    </div>
  );
};
