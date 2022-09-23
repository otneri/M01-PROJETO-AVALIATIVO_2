import { useContext } from "react";
import { ContextoTema} from './Temas'

export const useTema = () => {
    const contexto = useContext(ContextoTema)
    return contexto;
}