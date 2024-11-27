// import logo from './imagens/logo.svg';
import logo from '../../imagens/logo.svg';
import './style.css'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p>
            <b>
                Alura Books
            </b>
            </p>
      </div>
    )
}

export default Logo;