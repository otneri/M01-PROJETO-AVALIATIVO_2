import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  Cadastro,
  DevicesPage,
  PerfilPage,
  EditarPerfilPage,
} from "../pages";
import { RotaPrivada } from "./RotaPrivada";
// import {} from "./RotaPrivada"

export const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/Home"
        element={
          // <RotaPrivada>
            <HomePage />
          // </RotaPrivada>
        }
      />
      ;
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/perfil"
        element={
          <RotaPrivada>
            <PerfilPage />
          </RotaPrivada>
        }
      />
      <Route
        path="/perfilEdicao"
        element={
          <RotaPrivada>
            <EditarPerfilPage />
          </RotaPrivada>
        }
      />
      <Route
        path="/devices"
        element={
          // <RotaPrivada>
            <DevicesPage />
          // </RotaPrivada>
        }
      />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
