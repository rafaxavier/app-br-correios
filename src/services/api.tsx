import axios from 'axios';
// ip do back-end API
const api = axios.create({
  baseURL: 'https://vmhanshcoe.execute-api.sa-east-1.amazonaws.com/dev',
});

export default api;
