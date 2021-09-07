import cookies from './cookies';

export const clearAllCookies = () => {
  const result = cookies.getAll();
  const cookieArr = Object.keys(result);
  cookieArr.forEach((cookie) => {
    cookies.remove(cookie, { path: '/' });
  });
};
