import './App.css'
import Card from './components/card'
import Filtro from './components/filtro'
import Ordenacao from './components/ordenacao'
import BarraDePesquisa from './components/searchbar'
import Sidebar from './components/sidebar'

function App() {

  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <BarraDePesquisa/>
        <Filtro/>
        <Ordenacao/>
        <Card/>
      </div>
    </div>
  )
}

export default App
