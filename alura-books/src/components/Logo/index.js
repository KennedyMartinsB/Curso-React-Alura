// import logo from './imagens/logo.svg';
import logo from '../../imagens/logo.svg';
import './style.css'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p>
            <b>
                Alura 
            </b>
            Books
            </p>
      </div>
    )
}

export default Logo;