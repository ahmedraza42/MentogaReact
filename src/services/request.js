import { useContext } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { API_URLS, BASE_URL } from './constants';
import TokenStorageService from './tokenService';
// import * as RootNavigation from '../navigations/RootNavigation';
import { getItemFromStorage } from '../utils/storage';


const _tokenStorageService = TokenStorageService.getService();

const instance = axios.create({
  timeout: 4000000,
});

// Add a request interceptor
instance.interceptors.request.use(
  async config => {
    const token = await _tokenStorageService.getAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response && error.response.status >= 500) {
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401
      &&
      originalRequest.url.includes('/refreshToken')
    ) {
      // RootNavigation.navigate('Redirect');
      return Promise.reject(error);
    }

    else if (
      error.response &&
      error.response.status === 401
    ) {
      // originalRequest._retry = true;
      const headers = {}
      const user = await getItemFromStorage('current_user');
      console.log(';user in request',user[1])
      var data = JSON.stringify({
        "userID":  user[1]?.userID,
        "userName": user[0]?.fullName,
        "deviceID":  user[1]?.deviceID,
        "email":  user[0]?.email,
        "type":  user[1]?.type,
        "token":await _tokenStorageService.getAccessToken(),
        "refreshToken": await _tokenStorageService.getRefreshToken(),
      });
      return instance
        .post(`${BASE_URL}/account/refreshToken`, data,{headers:headers})
        .then(async res => {
          if (res.status >= 200 && res.status <= 400) {
            console.log('refresh  res', res,'originalRequest',originalRequest);
            await _tokenStorageService.setAccessToken(res?.data?.token);
            await _tokenStorageService.setRefreshToken(res?.data?.refreshToken);
            console.log('true', originalRequest.headers);
            originalRequest.headers['Authorization'] =
              'Bearer ' + (await _tokenStorageService.getAccessToken());

            return instance(originalRequest);
          }
        })
        .catch(err => {
          console.log('refresh token err', err);
          // RootNavigation.navigate('Redirect');
          return Promise.reject(error);
        });
    }
    else {
      return Promise.reject(error);
    }
  },
);

// get the headers
export const getApiRequestHeader = async url => {

  if (
    url.includes('/api/token') ||
    url.includes('/api/ForgetPasswordInitial') ||
    url.includes('/api/ForgetPassword')
  ) {
    return {
      // make OR condition for profile api pic
      'Content-Type':
        'application/json' || 'charset=utf-8' || 'multipart/form-data',
      Accept: 'application/json',
    };
  } else {
    return {
      // make OR condition for profile api pic
      'Content-Type':
        'application/json' || 'charset=utf-8' || 'multipart/form-data',
      Accept: 'application/json',
    };
  }
};

// update headers if it is not found
export const updateHeaders = async url => {
  // const header = await getApiRequestHeader(url);
  if(url.includes('mentee/UploadImage') || url.includes('/mentor/UploadImage') || url.includes('/Blog/createBlogs') || url.includes('/Blog/editBlogs') ||url.includes('update-mentor-resolution')||url.includes('mentee-dispute-resolution-create-update') || url.includes('api/Home/upload-cloudinary-video') || url.includes('api/user/get-user-profile') || url.includes('api/user/upload-user-video')||url.includes('api/user/upload-user-image')||url.includes('api/chat/user-chat-media') ){    console.log('multipart')
    instance.defaults.headers = { 
      'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": 'https://localhost:3000',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'IsReceivedFromMobile':true
  };
  }
  else{
    instance.defaults.headers = { 
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": 'https://localhost:3000',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'IsReceivedFromMobile':true
  };
  }
  
};

const request = async ({ method, url, data, headers, params }) => {
  if (headers === undefined) {
    await updateHeaders(url);
  }

  const promise = instance[method](url, data, { params });
  let response;
  try {
    response = await promise;
  } catch (error) {
    if (error.response) {
      throw Object.assign({}, new Error('Error.'), {
        response: error.response,
      });
    }
    throw Object.assign({}, new Error('Error.'), {
      response: { data: { message: error.toString() } },
    });
  }

  if (response) return response.data;
};

// independent Request without any or base url custom headers
export const independentRequest = async (url, method, data, headers) => {
  const promise = axios[method](url, data, headers);

  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};

// get method
export const get = async (url, config, params) => {
  /*   for (var key in params) {
    url = url + '/' + params[key];
  } */
  return request({ method: 'get', url, data: {}, ...config });
};

// del method
export const del = async (url, params, config) => {
  return request({ method: 'delete', url, data: { data: params }, ...config });
};

// post method
export const post = async (url, data, config) => {
  return request({ method: 'post', url, data, ...config });
};

// put method

export const put = async (url, data, config) => {
  return request({ method: 'put', url, data, ...config });
};

// patch method

export const patch = async (url, data, config) => {
  return request({ method: 'patch', url, data, ...config });
};

