import axios from 'axios';
import queryString from 'query-string';

const axiosConfig = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosConfig.interceptors.request.use(
  async (request) => {
    // if (localStorage.getItem('accessToken')) {
    //   request.headers.token = `JWT ${localStorage.getItem('accessToken')}`;
    // }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosConfig.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;
