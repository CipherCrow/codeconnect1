import Logo from "./assets/logo.svg"
import Feed from './assets/feed.svg'
import Perfil from "./assets/account_circle.svg"
import Info from "./assets/info.svg"
import Sair from "./assets/logout.svg"

export default function Sidebar(){
    return(
        <aside>
            <img src={Logo} alt="Logo do code connect"/>
            <nav>
                <ul>
                    <li>
                        <a href="#">Publicar</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Feed} alt="" />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Perfil} alt="" />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Info} alt="" />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Sair} alt="" />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}