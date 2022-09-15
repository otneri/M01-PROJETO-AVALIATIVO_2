import { useContext } from "react"
import { ContextAuth } from "./AuthPrivider"


export const useAuth = () =>{
    const context = useContext(ContextAuth)
    return context;
};