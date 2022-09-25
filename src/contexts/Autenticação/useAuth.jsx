import { useContext } from "react";
import { ContextAuth } from "./ContextAuth";

export const useAuth = () => {
  const context = useContext(ContextAuth);
  return context;
};
