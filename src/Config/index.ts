import { AxiosRequestConfig } from 'axios';

class Config {
  config: AxiosRequestConfig = {};

  constructor(baseURL: string) {
    this.config.baseURL = baseURL;
  }

  getConfig() {
    return this.config;
  }
}

export default Config;