import Cookies from 'js-cookie';

let userToken: string | null = null;

export const getUserToken = () => {
  if (userToken === null) {
    userToken = Cookies.get('token') || null;
  }

  return userToken;
};

export const setUserToken = (newToken: string) => {
  userToken = newToken;

  Cookies.set('token', newToken, {
    path: '/',
    expires: 356000,
  });
};

export const clearUserToken = () => {
  userToken = null;
  Cookies.remove('token');
};
