import { Navigate, Route, Routes } from 'react-router-dom'

export const Rotas = () => {
    return(
        <Routes>
            <Route path='/' element={'<Home/>'} />;
            <Route path='/' element={'<Login/>'} > </Route>
            <Route path='/' element={'<Cadastro/>'} ></Route>
            <Route path='/' element={'<Perfil/>'} ></Route>
            <Route path='/' element={'<PerfilEdicao/>'} ></Route>
            <Route path='/' element={'<DetalhesDevice/>'} ></Route>
            <Route path='/' element={'<Devices/>'} ></Route>
            <Route path='/' element={'<DeviceAdd/>'} ></Route>
            <Route path='*' element={<Navigate to='/' replace={true}/>} ></Route>
        </Routes>
    )
}