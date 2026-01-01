import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Filtro from './components/filtro'
import Ordenacao from './components/ordenacao'
import BarraDePesquisa from './components/searchbar'
import Sidebar from './components/sidebar'

function App() {
  const [dados,setDados] = useState([]);
  
  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dados => setDados(dados))
  },[])

  return (
    <div className='container'>
      <Sidebar/>
      <main>
        <BarraDePesquisa/>
        <Filtro/>
        <Ordenacao/>
        <ul className='container-cards'>
          {dados ? dados.map((item, index) => {
            return (
              <li key={item.id ?? index}>
                <Card
                  id={item.id}
                  imagemUrl={item.imagem_capa}
                  titulo={item.titulo}
                  resumo={item.resumo}
                  linhasDeCodigo={item.linhas_de_codigo}
                  compartilhamentos={item.compartilhamentos}
                  comentarios={item.comentarios}
                  usuario={item.usuario}
                />
              </li>
            );
          }) : null}
        </ul>
      </main>
    </div>
  )
}

export default App
