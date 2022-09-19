import axios from "axios";
// 01001000/json/

export const buscaCep = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

