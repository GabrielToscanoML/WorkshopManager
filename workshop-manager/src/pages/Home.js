import QRcode from 'react-qr-code';
import Header from '../components/Header';

import '../styles/home.css';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  return (
    <div className="Home">
      <Header />
      <main className='home-main-content'>
        <QRcode
          className='qrcode'
          value='https://ultracar.com.br/'
        />
        <button
          type='button'
          className='qrcode-btn'
          onClick={() => history.push('/ClientInfo')}
        >
          Ler QRcode!
        </button>
      </main>
    </div>
  );
}

export default Home;
