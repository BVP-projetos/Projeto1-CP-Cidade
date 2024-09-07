import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import Home from './routes/Home'

function App() {

  return (
    <>
      <Nav/>
        <Outlet/> {/*chamando todos os componentes filho*/}
      <Footer/>

    </>
  )
}

export default App
