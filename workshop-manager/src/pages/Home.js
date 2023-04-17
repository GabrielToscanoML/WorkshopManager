import QRcode from 'react-qr-code';

function Home() {
  return (
    <div className="Home">
      <QRcode
        value='https://ultracar.com.br/'
      />
      <button>Ler QRcode!</button>
    </div>
  );
}

export default Home;
