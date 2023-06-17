export const convertDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = `0${date.getHours() + 3}`.slice(-2); // adicionando 3 horas para ajustar o fuso horário
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear().toString().slice(-2);
  return `${hours}:${minutes}h  -  ${day}-${month}-${year}`;
};

export const formatCEP = (paramCep: string) => {
  let cepFormater = paramCep;
  cepFormater = cepFormater.replace(/\D/g, ''); // Remove qualquer caracter que não seja número
  cepFormater = cepFormater.substring(0, 8); // Limita o número de caracteres para 8
  cepFormater = cepFormater.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen depois dos primeiros cinco dígitos
  return cepFormater;
};
