export const convertDate = (value: string) => {
  const dataString = value;
  const data = new Date(dataString);

  const hora = `0${data.getHours()}`.slice(-2); // adiciona o zero à esquerda se a hora tiver apenas um dígito
  const minutos = `0${data.getMinutes()}`.slice(-2); // adiciona o zero à esquerda se os minutos tiverem apenas um dígito

  const horaMinutos = `${hora}:${minutos}`;
  const dataFormatada = data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  const resultado = `${horaMinutos} ${dataFormatada}`;
  return resultado;
};
