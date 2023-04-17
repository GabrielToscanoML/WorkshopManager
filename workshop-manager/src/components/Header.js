import '../styles/header.css';
import logo from '../images/cabecalho.png';
import Tasks from './Tasks';

function Header() {
  return (
    <header>
      <img src={ logo } alt='Ultracar logo' className='header-logo'/>
      <Tasks />
    </header>
  );
}

export default Header;
