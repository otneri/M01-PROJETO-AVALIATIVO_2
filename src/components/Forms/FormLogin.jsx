import { SubTitle } from "../SubTitle/SubTitle";
import {  ConteinerInput} from "../../components/Inputs/Input.styled"
import { Input } from "../Inputs/Input"
import { FormStyle, SpanError } from "./Form.styled"
import { Botao, BotaoLinkPaper } from "../Buttons/Botao";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
    email: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório')   
})
export const FormLogin = () => {
    const {  handleSubmit, register, formState : {errors} } = useForm({resolver: yupResolver(validationSchema)})


    const handleConfirmarForm = (valores) => {
        console.log(valores);
    }
    
    
    
    return (

        <FormStyle onSubmit={handleSubmit(handleConfirmarForm)}>

            <ConteinerInput>
                <SubTitle>E-mail: </SubTitle>
                <Input {...register('email')}/>
                <SpanError>{errors?.email?.message}</SpanError>
            </ConteinerInput>

            <ConteinerInput>
                <SubTitle>Senha: </SubTitle>
                <Input {...register('password')}
                type='password'/>
                <SpanError>{errors?.password?.message}</SpanError>
            </ConteinerInput>

            <Botao handleClick={handleSubmit(handleConfirmarForm)}>Login</Botao>
            <BotaoLinkPaper href='/cadastro'>Cadastre-se</BotaoLinkPaper>

        </FormStyle>
    );
};