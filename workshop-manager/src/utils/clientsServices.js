import clientes from "../mocks/Clients";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomClient = () => {
  const randomID = getRandomInt(1, 4);
  const randomClient = clientes.find(
    (client) => client.id === randomID
  );
  return randomClient;
};