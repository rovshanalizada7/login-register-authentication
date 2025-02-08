import { Token } from '../../../service/api';

const TOKEN_KEY = 'token';

export const saveToken = (token: Token) => {
  localStorage.setItem(TOKEN_KEY, token.accessToken);
};

export const destroyToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
    ? localStorage.getItem(TOKEN_KEY) 
    : null;
};
