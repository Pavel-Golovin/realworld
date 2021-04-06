import BaseService from './baseService';

export default class UserService extends BaseService {
  fetchRegistration = async (formData) => {
    const response = await fetch(`${this.baseApi}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ user: formData }),
    }).catch((error) => {
      throw new Error(error);
    });

    const result = await response.json();
    return result;
  };

  fetchCurrentUser = async (token) => {
    const response = await fetch(`${this.baseApi}user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
    }).catch((error) => {
      throw new Error(error);
    });

    const result = await response.json();
    return result;
  };

  fetchUpdateUser = async (token, formData) => {
    const response = await fetch(`${this.baseApi}user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ user: formData }),
    }).catch((error) => {
      throw new Error(error);
    });

    const result = await response.json();
    return result;
  };

  fetchLogin = async (formData) => {
    const response = await fetch(`${this.baseApi}users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ user: formData }),
    }).catch((error) => {
      throw new Error(error);
    });

    const result = await response.json();
    return result;
  };
}
