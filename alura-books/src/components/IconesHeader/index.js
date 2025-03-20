import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;

`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
         /* Pra cada icone da lista vai retornar um elemento */
         <Icones>
         { icones.map((icon) => (
           <Icone key={icon}><img src={icon} alt='icon'></img></Icone>
         ))}
       </Icones>
    )
}

export default IconesHeader