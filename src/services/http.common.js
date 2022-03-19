import axios from 'axios';
import { Auth } from 'aws-amplify';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  headers: {
    'Content-type': 'application/json',
  },
});
http.interceptors.request.use(
  async (req) => {
    const { jwtToken } = (await Auth.currentSession()).getIdToken();
    req.headers.common.Authorization = `Bearer ${jwtToken}`;
    return req;
  },
  ((error) => Promise.reject(error)),
);
export default http;
