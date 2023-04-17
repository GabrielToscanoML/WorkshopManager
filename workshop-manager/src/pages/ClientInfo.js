import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getRandomClient } from '../utils/clientsServices';

function ClientInfo() {
  const [currentClient, setCurrentClient] = useState({});
  const [currentVehicle, setCurrentVehicle] = useState({});

  useEffect(() => {
    const randomClient = getRandomClient();
    const vehicle = randomClient.veiculo;
    setCurrentClient(randomClient);
    setCurrentVehicle(vehicle);
  }, [])

  return (
    <div className="client-info">
      <Header />
      <main>
        <h1>Nome: {currentClient.nome}</h1>
        <p>CPF: {currentClient.cpf}</p>
        <p>Telefone: {currentClient.telefone}</p>
        <p>Veículo: {currentVehicle.modelo}</p>
        <p>Placa: {currentVehicle.placa}</p>
      </main>
    </div>
  );
}

export default ClientInfo;
