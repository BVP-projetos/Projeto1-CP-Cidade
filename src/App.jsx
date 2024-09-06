import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import Home from './routes/Home'

function App() {

  return (
    <>
      <Nav/>
        <div>
          <h1>Bem-Vindo ao nosso site de esportes!</h1>
        </div>

        <Outlet/> {/*chamando todos os componentes filho*/}
      <Footer/>

    </>
  )
}

export default App
