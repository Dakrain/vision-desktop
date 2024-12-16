import axios, {
  AxiosInstance,
  CreateAxiosDefaults,
  AxiosRequestConfig,
} from 'axios';
import axiosRetry from 'axios-retry';
import { camelizeKeys } from 'humps';

class BaseService {
  private instance: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create({
      ...config,
      headers: {
        appplatform: 'Windows',
      },
    });

    axiosRetry(this.instance, {
      retries: 3,
      retryDelay: (retryCount: number) => retryCount * 1000,
    });

    this.instance.interceptors.response.use(
      (response) => {
        if (
          response.data &&
          response.headers['content-type'].includes('application/json')
        ) {
          response.data = camelizeKeys(response.data);
        }
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.instance.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T>(url, config);
    return response.data;
  }
}

export default BaseService;
