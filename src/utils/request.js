import axios from 'axios';

const request = axios.create({
  baseURL: `${window.location.origin}`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

export default request;
