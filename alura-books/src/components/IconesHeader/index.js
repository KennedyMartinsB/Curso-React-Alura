import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './style.css'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
         /* Pra cada icone da lista vai retornar um elemento */
         <ul className='icones'>
         { icones.map((icone) => (
           <li className='icone'><img src={icone} alt='icon'></img></li>
         ))}
       </ul>
    )
}

export default IconesHeader