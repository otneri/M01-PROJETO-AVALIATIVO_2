import { useContext } from "react";
import { LogadoContexto } from "./Logado";

export const useLogado = () => {
  const context = useContext(LogadoContexto);
  return context;
};
