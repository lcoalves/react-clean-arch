import Axios, { AxiosRequestConfig } from 'axios';

import { getApiHost } from 'services/HostService/HostService';

export interface IRequest {
  url: string;
  body?: any;
  config?: AxiosRequestConfig;
}
// export const abortController = () => new AbortController();

Axios.interceptors.request.use(config => config);

const Api = {
  get: ({ url }: IRequest): Promise<any> => Axios.get(`${getApiHost()}${url}`),

  post: ({ url, body, config }: IRequest): Promise<any> =>
    Axios.post(`${getApiHost()}${url}`, body, config),

  put: ({ url, body }: IRequest): Promise<any> => Axios.put(`${getApiHost()}${url}`, body),

  delete: ({ url }: IRequest): Promise<any> => Axios.delete(`${getApiHost()}${url}`),
};

export default Api;
