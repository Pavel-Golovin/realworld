const KEY_NAME_FOR_TOKEN_LS = 'token';

const setToLocalStorage = (value, data) => localStorage.setItem(value, JSON.stringify(data));

const removeFromLocalStorage = (value) => localStorage.removeItem(value);

const getFromLocalStorage = (value = '') => JSON.parse(localStorage.getItem(value));

export const setToken = (token) => setToLocalStorage(KEY_NAME_FOR_TOKEN_LS, token);

export const getToken = () => getFromLocalStorage(KEY_NAME_FOR_TOKEN_LS);

export const removeToken = () => removeFromLocalStorage(KEY_NAME_FOR_TOKEN_LS);
