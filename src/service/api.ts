import { AuthSchema } from '../components/Auth/utils/schema';
import { axiosInstance } from './axios';

export const register = (data: AuthSchema) => {
  return axiosInstance.post('/api/v1/auth/register', { ...data });
};

export type Token = {
  accessToken: string;
};

export const login = (data: AuthSchema) => {
  return axiosInstance.post<Token>('/api/v1/auth/login', { ...data });
};

export type Profile = {
  id: string;
  username: string;
};

export const me = (token: Token) => {
  return axiosInstance.get<Profile>('/api/v1/auth/me', {
    headers: { Authorization: 'Bearer ' + token.accessToken },
  });
};
