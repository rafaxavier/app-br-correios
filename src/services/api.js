import axios from 'axios';
// ip do back-end API
const api = axios.create({
    // baseURL: 'http://192.168.176.20:3333'
    // baseURL:'http://192.168.0.112:3333'
    baseURL:'http://192.168.1.104:3000/api/v1'
});

export default api;