import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Config from './Config';

class BaseApi {
  instance: AxiosInstance;
  config: AxiosRequestConfig;

  constructor(baseUrl: string) {
    this.config = new Config(baseUrl).getConfig();
    this.instance = axios.create(this.config);
  }
}
export default BaseApi;