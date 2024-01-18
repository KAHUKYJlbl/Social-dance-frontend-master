/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import axios, { type AxiosResponse, type AxiosError, type AxiosRequestConfig } from 'axios';
import { getUserToken } from './token';

export interface ApiRequestConfig {
  body?: unknown;
  headers?: Record<string, string>;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  queryParams?: unknown;
  url: string;
  baseURL?: string;
  authRequired?: boolean;
}

/**
 * Wrapper function for all API requests.
 *
 * @param config Request settings.
 *
 * @template Returned Type of the returned value.
 */
export const apiRequest = async <Returned = unknown>({
  authRequired,
  body,
  headers = {},
  method,
  queryParams,
  url,
  baseURL = import.meta.env.VITE_BASE_URL,
}: ApiRequestConfig) => {
  const axiosHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (authRequired) {
    const token = getUserToken();
    if (token) {
      axiosHeaders['X-Auth-Token'] = token;
    }
  }

  const axiosConfig: AxiosRequestConfig = {
    data: body,
    headers: axiosHeaders,
    method,
    params: queryParams,
    url,
    baseURL,
  };

  try {
    const response = (await axios(axiosConfig)) as AxiosResponse<Returned>;
    return response.data;
  } catch (error) {
    // TODO: поработать над ошибками
    const axiosError = error as AxiosError;
    throw new Error(axiosError.message);
  }
};
