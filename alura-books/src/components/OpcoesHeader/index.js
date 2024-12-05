import './style.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        /* <ul className='opcoes'>
          <li className='opcao'><p>CATEGORIAS</p></li>
          <li className='opcao'><p>MINHAS ESTANTE</p></li>
          <li className='opcao'><p>FAVORITOS</p></li>
        </ul> */
        <ul className='opcoes'>
         { textoOpcoes.map((texto) => (
          <li className='opcao'><p>{texto}</p></li>
         )) }
        </ul>
    )
}

export default OpcoesHeader