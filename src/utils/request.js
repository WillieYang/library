import axios from 'axios';
import cookies from './cookies';

const request = axios.create({
  baseURL: `${window.location.origin}`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

request.interceptors.request.use((config) => {
  const token = cookies.get('token');
  config.headers.Authentication = token || '';
  return config;
});

export default request;
