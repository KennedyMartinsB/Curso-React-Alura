

import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import Logo from '../Logo'
// import './style.css'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
      </HeaderContainer>
    )
}

export default Header