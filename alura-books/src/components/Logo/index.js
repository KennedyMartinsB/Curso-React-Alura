// import logo from './imagens/logo.svg';
import logo from '../../imagens/logo.svg';
// import './style.css'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage 
            src={logo} 
            alt='logo' 
            className='logo-img'
            >
            </LogoImage>
            <p>
            <b>
                Alura 
            </b>
            Books
            </p>
      </LogoContainer>
    )
}

export default Logo;