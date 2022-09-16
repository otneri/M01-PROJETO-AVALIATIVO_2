import { useContext } from "react"
import { ContextAuth } from "./AuthProvider"


export const useAuth = () =>{
    const context = useContext(ContextAuth)
    return context;
};