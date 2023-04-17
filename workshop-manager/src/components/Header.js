import '../styles/header.css';
import logo from '../images/cabecalho.png';
import TasksBtn from './TasksBtn';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  return (
    <header>
      <img
        src={ logo }
        alt='Ultracar logo'
        className='header-logo'
        onClick={() => history.push('/') }  
      />
      <TasksBtn />
    </header>
  );
}

export default Header;
