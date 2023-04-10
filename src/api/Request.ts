import axios from 'axios';

const Request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_STATE + import.meta.env.VITE_BASE_URL_PATH
});

export default Request;
