import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
});

export {
  API,
};
