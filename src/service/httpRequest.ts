import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { EAuthCookieKey } from "~/constant/auth";
import { removeAuthCookie } from "~/helpers/auth";
import { TError } from "~/types/api.types";

const baseURL = process.env.API_DOMAIN;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    //setup config

    if (config.headers) {
      const token = Cookies.get(EAuthCookieKey.Token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (res) => {
    //auto map data
    return res.data;
  },
  (_error) => {
    const error = _error as TError;

    if (error.response?.status === 401) {
      removeAuthCookie();
    }

    return Promise.reject(error);
  },
);

class HTTPRequest {
  private api: AxiosInstance;

  constructor() {
    this.api = axiosInstance;
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.get(url, config);
  }

  async post<T = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.api.post(url, data, config);
  }

  async put<T = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.api.put(url, data, config);
  }

  async patch<T = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.api.patch(url, data, config);
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.delete(url, config);
  }
}

const httpRequest = new HTTPRequest();

export default httpRequest;
