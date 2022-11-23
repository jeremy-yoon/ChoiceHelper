import axios from 'axios';
import {getToken} from '../../App';

import {ROOT_URL} from './url';

export const wrapRequest = func => {
  return async (...args) => {
    const res = await func(...args);
    if (res && res.data && res.code && res.code !== 0) {
      throw res;
    } else {
      // 성공하면 data를 return
      return res.data;
    }
  };
};

export const instance = () => {
  const instance = axios.create({
    baseURL: ROOT_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
  });

  let token;

  instance.interceptors.request.use(
    function (config) {
      // 요청 바로 직전

      // axios 설정값에 대해 작성합니다.
      // console.log('config', config.url);

      if (config.method != 'get') {
        if (
          config.url == '/v1/auth/kakao-register/' ||
          config.url == '/v1/auth/kakao-login/'
        ) {
          token = null;
        } else {
          token = getToken();
        }
      } else {
        if (config.token == false) {
          token = null;
        } else {
          token = getToken();
        }
      }
      console.log('token\n', token);
      if (token) config.headers.Authorization = `Token ${token}`;

      // console.log(config, 'config');
      return config;
    },
    function (error) {
      // 요청 에러 처리를 작성합니다.
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function (response) {
      /*
          http status가 200인 경우
          응답 바로 직전에 대해 작성합니다. 
          .then() 으로 이어집니다.
        */
      return response;
    },

    function (error) {
      /*
          http status가 200이 아닌 경우
          응답 에러 처리를 작성합니다.
          .catch() 으로 이어집니다.    
      */
      return Promise.reject(error);
    },
  );
  return instance;
};
