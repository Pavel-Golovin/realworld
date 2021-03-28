export const setToLocalStorage = (value, data) => localStorage.setItem(value, JSON.stringify(data));
export const removeFromLocalStorage = (value) => localStorage.removeItem(value);
export const getFromLocalStorage = (value = '') => JSON.parse(localStorage.getItem(value));
