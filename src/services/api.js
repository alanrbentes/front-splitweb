import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.1.72:3333',
  baseURL: 'https://67.205.142.63'
});

export default api;
