export const convertDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = `0${date.getHours() + 3}`.slice(-2); // adicionando 3 horas para ajustar o fuso horário
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear().toString().slice(-2);
  return `${hours}:${minutes} ${day}-${month}-${year}`;
};
