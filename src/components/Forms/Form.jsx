import { Input } from "../Inputs/Input";
import { FormStyle } from "./Form.styled";
import { useForm } from "react-hook-form";
import { Botao, BotaoLinkPaper } from "../Buttons/Botao";




export const Form = () => {
  const {  handleSubmit } = useForm();
  
  
  
  const handleConfirmarForm = (valores) => {
    console.log(valores);
  }
  
  return (
    <div>
      <FormStyle onSubmit={handleSubmit(handleConfirmarForm)}>
        <Input
          placeholder="Seu nome aqui"
                    // ${requiredErrors && styled.errors}
        >
          Nome completo:
        </Input>
        
        {/* <Input
          placeholder="Seu e-mail"
          name={'email'}
          ref={ref}
          type="e-mail"
          onChange={onChange}
        >
          E-mail:
        </Input>
        <Input
          placeholder="Adicione uma foto"
          name={'photoUrl'}
          ref={ref}
          type="URL"
          onChange={onChange}
        >
          URL foto perfil:
        </Input>
        <Input
          placeholder="Seu telefone aqui"
          name={'phone'}
          ref={ref}
          type="fone"
          onChange={onChange}
        >
          Telefone:
        </Input>
        <Input
          placeholder="Sua senha aqui"
          name={'password'}
          type="password"
          ref={ref}
          onChange={onChange}
        >
          Senha:
        </Input>
        <Input
          placeholder="Confirme a senha"
          name={'passwordConfirm'}
          type="password"
          ref={ref}
          onChange={onChange}
        >
          Confirmação de senha:
        </Input>
        <Input
          placeholder="Digite o CEP aqui"
          ref={ref}
          name={'zipCode'}
          onChange={onChange}
        >
          CEP:
        </Input>
        <Input
          placeholder="Seu endereço aqui"
          ref={ref}
          name='street'
          onChange={onChange}
        >
          Logradouro/Endereço:
        </Input>
        <Input
          placeholder="Sua cidade aqui"
          ref={ref}
          name='city'
          onChange={onChange}
        >
          Cidade:
        </Input>
        <Input
          placeholder="Seu Estado aqui"
          ref={ref}
          type="state"
          name='state'
          onChange={onChange}
        >
          Estado:
        </Input>
        <Input
          placeholder="Seu complemento aqui"
          ref={ref}
          name='complement'
          onChange={onChange}
        >
          Complemento:
        </Input>
        <Input
          placeholder="Número da casa aqui"
          ref={ref}
          name='number'
          onChange={onChange}
        >
          Número:
        </Input>
        <Input
          placeholder="Seu bairro aqui"
          ref={ref}
          name='neighborhood'
          onChange={onChange}
        >
          Bairro:
        </Input> */}
      </FormStyle> 

      <Botao type="submit" handleClick={handleConfirmarForm()}>
        Cadastrar
      </Botao>

      <BotaoLinkPaper href="/">Login</BotaoLinkPaper>
    </div>
  );
};
