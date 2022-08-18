import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { REQUEST_FAILED_MESSAGE } from "common/constants/error";

const fetch = axios.create({
  baseURL: `/api`,
  timeout: 10 * 1000,
});

const requestInterceptors = (config: AxiosRequestConfig) => {
  // 可以设置请求头啥的，注意请求头，每个用户可能都不一样
  if (!config.headers) config.headers = {};
  return config;
};

fetch.interceptors.request.use(requestInterceptors, (error) => {
  return Promise.reject(error);
});

fetch.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    console.warn(REQUEST_FAILED_MESSAGE, error);
    return Promise.reject(REQUEST_FAILED_MESSAGE);
  }
);

export const fetcherInfiniteList = (
  query: AxiosRequestConfig
): Promise<any> => {
  return fetch(query).then((resp) => resp.data.payload);
};

export default fetch;
