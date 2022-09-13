import {useLocation} from 'react-router-dom'

export const Navbar = () => {
    const { pathname } = useLocation();

    <nav>
        <ul>
            <li>
                <link to="">Início</link>
            </li>
            <li>
                <link to="">Dispositivos</link>
            </li>
            <li>
                <link to="">Perfil</link>
            </li>
        </ul>
    </nav>
}