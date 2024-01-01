import { refreshToken } from '@utils/refreshToken';
import axios, { AxiosRequestConfig } from 'axios';

export class ApiService {
    public instance = axios.create({
        headers: {},
    });

    public get = async (
        url: string,
        config?: AxiosRequestConfig
    ): Promise<any> => {
        return this.instance
            .get(url, config)
            .then((x) => x.data)
            .catch((err) => {
                if (err?.message === 'Network Error') {
                    throw new Error('Network Error');
                }

                if (
                    err?.response.data.error.message ===
                    'The access token expired'
                ) {
                    refreshToken();
                }

                if (axios.isAxiosError(err)) throw err.response?.data;

                throw err;
            });
    };

    public post = async (
        url: string,
        params?: any,
        config?: AxiosRequestConfig
    ): Promise<any> => {
        return this.instance
            .post(url, params, config)
            .then((x) => x.data)
            .catch((err) => {
                if (err?.message === 'Network Error')
                    throw new Error('Network Error');
                if (axios.isAxiosError(err)) throw err.response?.data;
                throw err;
            });
    };

    public put = async (
        url: string,
        params?: any,
        config?: AxiosRequestConfig
    ): Promise<any> => {
        return this.instance
            .put(url, params, config)
            .then((x) => x.data)
            .catch((err) => {
                if (err?.message === 'Network Error')
                    throw new Error('Network Error');
                if (axios.isAxiosError(err)) throw err.response?.data;
                throw err;
            });
    };

    public delete = async (
        url: string,
        config?: AxiosRequestConfig
    ): Promise<any> => {
        return this.instance
            .delete(url, config)
            .then((x) => x.data)
            .catch((err) => {
                if (err?.message === 'Network Error')
                    throw new Error('Network Error');
                if (axios.isAxiosError(err)) throw err.response?.data;
                throw err;
            });
    };

    public patch = async (
        url: string,
        params?: any,
        config?: AxiosRequestConfig
    ): Promise<any> => {
        return this.instance
            .patch(url, params, config)
            .then((x) => x.data)
            .catch((err) => {
                if (err?.message === 'Network Error')
                    throw new Error('Network Error');
                if (axios.isAxiosError(err)) throw err.response?.data;
                throw err;
            });
    };
}

export const defaultUrl: string = 'https://api.spotify.com/v1';

export const api = new ApiService();
