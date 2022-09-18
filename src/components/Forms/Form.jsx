import { Input } from "../Inputs/Input";
import { FormStyle, SpanError } from "./Form.styled";
import { useForm } from "react-hook-form";
import { Botao, BotaoLinkPaper } from "../Buttons/Botao";
import { ConteinerInput, InputErrorStyled } from "../../components/Inputs/Input.styled";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import {PhoneNumber} from '../../utils/validations'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

  const validationSchema = yup.object({
    fullName: yup.string().required(),
    emaill: yup.string().email(),
    photoURL: yup.string(),
    phone: yup.string().required(),
    password: yup.string().required(),
    passwordConfirm: yup.string().required().oneOf([yup.ref('password'), null],'Senha incompatível'),
    zipCode: yup.string().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    complement: yup.string().required(),
    number: yup.string().required(),
    neighborhood: yup.string().required(),
  })


export const Form = () => {
  const {  handleSubmit, register, formState : {errors} } = useForm({resolver: yupResolver(validationSchema)});
  
  
  
  const handleConfirmarForm = (valores) => {
    console.log(valores);
  }


  
  
  function onError  (erro) {
    console.log('erro: ' , erro);

  }

  
  
  return (
    <div>
      <FormStyle onSubmit={handleSubmit(handleConfirmarForm, onError)}>
        <ConteinerInput>
        <SubTitle>Nome completo:  </SubTitle>
        {errors?.fullName?.type? <InputErrorStyled
        {...register ('fullName',{required:true })} 
        placeholder="Seu nome aqui"
        id={'nome'}/>:
          <Input {...register ('fullName',{required:true})} 
          placeholder="Seu nome aqui"
          id={'nome'}
          />}

          
        {errors?.fullName?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>E-mail:</SubTitle>
        {errors?.email?.type? <InputErrorStyled
        {...register ('email',{required:true })} 
        placeholder="exemplo@exemplo.com"
        id={'email'}/>:
          <Input {...register ('email',{required:true})} 
          placeholder="Seu nome aqui"
          id={'email'}
          />}

          
        {errors?.fullName?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Foto de Perfil </SubTitle>
        <Input {...register ('photoUrl',{required:true})} 
          placeholder="Adicione uma foto"
          id={'photo'}
          />
          
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Telefone:</SubTitle>
        {errors?.phone?.type? <InputErrorStyled
        {...register ('phone',{required:true})} 
        placeholder="(DDD)912345678"
        id={'phone'}
        type='tel'/>:
        
          <Input {...register ('phone',{required:true})} 
          placeholder="(DDD)912345678"
          id={'phone'}
          type='tel'
          
          />}
          
        {errors?.phone?.type && <SpanError>Campo obrigatório! Número inválido!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Senha:</SubTitle>
        {errors?.password?.type? <InputErrorStyled 
        {...register ('password',{required:true})} 
        placeholder="Insira um telefone"
        id={'password'}
        type='password'/>:
          <Input {...register ('password',{required:true, minLength: 6 })} 
          placeholder="Insira uma senha"
          id={'password'}
          type='password'/>}
          
        {errors?.password?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>
        
        <ConteinerInput>
        <SubTitle>Confirmar Senha:</SubTitle>
        {errors?.passwordConfirm?.type? <InputErrorStyled 
        {...register ('passwordConfirm',{required:true})} 
        placeholder="Insira um telefone"
        id={'passwordConfirm'}
        type='password'/>:
          <Input {...register ('passwordConfirm',{required:true})} 
          placeholder="Insira uma senha"
          id={'passwordConfirm'}
          type='password'/>}
          
        {errors?.passwordConfirm?.type && <SpanError>Campo obrigatório!</SpanError>}
        {errors?.passwordConfirm?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>CEP:</SubTitle>
        {errors?.zipCode?.type? <InputErrorStyled 
        {...register ('zipCode',{required:true})} 
        placeholder="Digite o CEP aqui"
        id={'CEP'}
        />:
          <Input {...register ('zipCode',{required:true})} 
          placeholder="Digite o CEP aqui"
          id={'CEP'}
          />}
          
        {errors?.zipCode?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Endereço:</SubTitle>
        {errors?.street?.type? <InputErrorStyled 
        {...register ('street',{required:true})} 
        placeholder="Seu endereço aqui"
        id={'endereco'}/>:
          <Input {...register ('street',{required:true})} 
          placeholder="Seu endereço aqui"
          id={'endereco'}/>}
          
        {errors?.street?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Cidade:</SubTitle>
        {errors?.city?.type? <InputErrorStyled 
        {...register ('city',{required:true})} 
        placeholder="Sua cidade aqui"
        id={'cidade'}/>:
          <Input {...register ('city',{required:true})} 
          placeholder="Sua cidade aqui"
          id={'cidade'}/>}
          
        {errors?.city?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Estado:</SubTitle>
        {errors?.state?.type? <InputErrorStyled 
        {...register ('state',{required:true})} 
        placeholder="Seu estado aqui"
        id={'state'}/>:
          <Input {...register ('state',{required:true})} 
          placeholder="Seu estado aqui"
          id={'state'}/>}
          
        {errors?.state?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Complemento:</SubTitle>
          <Input {...register ('complement',{required:true})} 
          placeholder="Seu complemento aqui"
          id={'complemento'}/>
          
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Número:</SubTitle>
        {errors?.number?.type? <InputErrorStyled 
        {...register ('number',{required:true})} 
        placeholder="Número da casa aqui"
        id={'number'}/>:
          <Input {...register ('number',{required:true})} 
          placeholder="Seu numero aqui"
          id={'number'}/>}
          
        {errors?.number?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>

        <ConteinerInput>
        <SubTitle>Bairro:</SubTitle>
        {errors?.neighborhood?.type? <InputErrorStyled 
        {...register ('neighborhood',{required:true})} 
        placeholder="Seu bairro aqui"
        id={'neighborhood'}/>:
          <Input {...register ('neighborhood',{required:true})} 
          placeholder="Seu bairro aqui"
          id={'neighborhood'}/>}
          
        {errors?.neighborhood?.type && <SpanError>Campo obrigatório!</SpanError>}
        </ConteinerInput>


      </FormStyle> 

      <Botao type="submit" handleClick={handleSubmit(handleConfirmarForm, onError)}>
        Cadastrar
      </Botao>

      <BotaoLinkPaper href="/">Login</BotaoLinkPaper>
    </div>
  );
};
