import './style.css'

export default function Ordenacao() {
    return (
        <ul className="lista-ordenacao">
            <li>
                <a href="" className="lista-ordenacao__link lista-ordenacao_link_selecionado">Recentes</a>
            </li>
            <li>
                <a href="" className="lista-ordenacao__link">Antigos</a>
            </li>
        </ul>
    )
}