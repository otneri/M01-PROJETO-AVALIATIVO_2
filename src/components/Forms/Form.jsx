import { Input } from "../Inputs/Input";
import { FormStyle, SpanError, DivBotoes } from "./Form.styled";
import { useForm } from "react-hook-form";
import { Botao, BotaoLinkPaper } from "../Buttons/Botao";
import { ConteinerInput, InputErrorStyled } from "../../components/Inputs/Input.styled";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import {PhoneNumber, FullName} from '../../utils/validations'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

  const validationSchema = yup.object({
    fullName: yup.string().min(2, 'Mínimo 2 catactéres').matches(FullName, 'Apenas letras').required('Campo obrigatório'),
    emaill: yup.string().email('Campo obrigatório'),
    photoURL: yup.string(),
    phone: yup.string().required('Campo obrigatório').matches(PhoneNumber),
    password: yup.string().required('Campo obrigatório'),
    passwordConfirm: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), null],'Senha incompatível'),
    zipCode: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    state: yup.string().required('Campo obrigatório'),
    complement: yup.string(),
    number: yup.string().required('Campo obrigatório'),
    neighborhood: yup.string().required('Campo obrigatório'),
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

        
        <SpanError>{errors?.fullName?.message}</SpanError>
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

          
        <SpanError>{errors?.fullName?.message}</SpanError>
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
          placeholder="(DDD) 91234-5678"
          id={'phone'}
          type='tel'
          
          />}
          
        {errors?.phone?.type && <SpanError>Telefone inválido!</SpanError>}
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
          
        <SpanError>{errors?.password?.message}</SpanError>
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
          
        <SpanError>{errors.passwordConfirm?.message}</SpanError>
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
          
        <SpanError>{errors?.zipCode?.message}</SpanError>
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
          
        <SpanError>{errors?.street?.message}</SpanError>
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
          
        <SpanError>{errors?.city?.message}</SpanError>
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
          
        <SpanError>{errors?.state?.message}</SpanError>
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
          
        <SpanError>{errors?.number?.message}</SpanError>
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
          
        <SpanError>{errors?.neighborhood?.message}</SpanError>
        </ConteinerInput>


      </FormStyle> 

      <DivBotoes>
        <Botao type="submit" handleClick={handleSubmit(handleConfirmarForm, onError)}>
          Cadastrar
        </Botao>

        <BotaoLinkPaper href="/">Login</BotaoLinkPaper>
      </DivBotoes>
    </div>
  );
};
