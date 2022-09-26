import { useContext } from "react";
import { ContextDados } from "./dadosUser.Provider";

export const useDadosUser = () => {
  const context = useContext(ContextDados);
  return context;
};
