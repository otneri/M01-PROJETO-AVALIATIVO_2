import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  Cadastro,
  DevicesPage,
  PerfilPage,
  EditarPerfilPage,
} from "../pages";
// import {} from "./RotaPrivada"

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/Home" element={<HomePage />}/>;
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/perfil" element={<PerfilPage/>}/>
      <Route path="/perfilEdicao" element={<EditarPerfilPage/>}/>
      <Route path="/devices" element={<DevicesPage/>}/>
      <Route path="*" element={<Navigate to="/" replace={true} />}/>
    </Routes>
  );
};
