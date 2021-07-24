import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const onRequest = (config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token') ?? '',
  };

  return config;
};

export const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.request.use(onRequest);
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
