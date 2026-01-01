import "./styles.css";
import Imagem from "./assets/Codeeditor.png";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import User from "./assets/user.png";

export default function Card() {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Imagem} alt="Imagem do Post"/>
            </div>
            <div className="card_conteudo">
                <div className="conteudo__texto">
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur sapien eu purus condimentum bibendum. Nullam et aliquam dolor, ac auctor nisl. Proin vehicula finibus nunc quis dapibus. Donec lacinia ut risus id tristique. Sed et justo nec enim efficitur condimentum.</p>
                </div>
            </div>
            <div className="conteudo__rodape">
                <ul>
                    <li>
                        <img src={Code} alt="codigos"/>
                        <span>120</span>
                    </li>
                    <li>
                        <img src={Share} alt="compartilhamentos"/>
                        <span>12</span>
                    </li>
                    <li>
                        <img src={Chat} alt="comentarios"/>
                        <span>10</span>
                    </li>
                </ul>
                <div className="rodape__usuario">
                    <img src={User} alt="Imagem usuario"/>
                    <span>@tioDoPave</span>
                </div>
            </div>
        </article>
    );
}
