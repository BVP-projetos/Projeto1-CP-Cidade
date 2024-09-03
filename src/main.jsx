import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/* Pacote de dependencias */
import { createBrowserRouter,RouterProvider } from 'react-router-dom' 
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx'

/* Criando a função Browse router */

const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    /* criando elementos filhos*/
  
    children:[
      
      {path:'/home', element:<Home/>},
     { path:'/produtos', element:<Produtos/>},
      {path:'/sobre', element:<Sobre/>},
      {path:'/contato', element:<Contato/>},

    ]

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*criando a desestruturação pra que seja renderizada */}
    <RouterProvider router={router} /> {/* Renderização usando browse provider */}
  </StrictMode>,
)