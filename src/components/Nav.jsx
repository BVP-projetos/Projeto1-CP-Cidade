import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <>      
        <Link to = '/home'>Home</Link>
        <Link to = '/produtos'>Produtos</Link>
        <Link to = '/sobre'>Sobre</Link>
        <Link to = '/contato'>Contato</Link>
        </>
    )
}

export default Nav