import axios from 'axios';

const apiHandler = axios.create({
  baseURL: '/api/v1',
});

export default apiHandler;
