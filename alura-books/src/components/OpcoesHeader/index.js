import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcoes = styled.ul`
  display: flex;
  flex-direction: row;
`

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  align-items: center;
`

function OpcoesHeader() {
    return (
        /* <ul className='opcoes'>
          <li className='opcao'><p>CATEGORIAS</p></li>
          <li className='opcao'><p>MINHAS ESTANTE</p></li>
          <li className='opcao'><p>FAVORITOS</p></li>
        </ul> */
        //vasculha o textoOpções e lista todas as opções
        <Opcoes>
         { textoOpcoes.map((texto) => (
          <Opcao><p>{texto}</p></Opcao>
         )) }
        </Opcoes>
    )
}

export default OpcoesHeader