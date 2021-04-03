export default class BaseService {
  baseApi = `https://conduit.productionready.io/api/`;

  fetchDataGet = async (endpoint) => {
    const res = await fetch(`${this.baseApi}${endpoint}`).catch((error) => {
      throw new Error(error);
    });
    if (!res.ok) {
      throw new Error(`Code status: ${res.status}`);
    }
    const body = await res.json();
    return body;
  };

  fetchArticles = async (page) => {
    const articles = await this.fetchDataGet(`articles?limit=10&offset=${(page - 1) * 5}`);
    return articles;
  };

  fetchSingleArticle = async (slug) => {
    const singleArticle = await this.fetchDataGet(`articles/${slug}`);
    return singleArticle;
  };

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

  fetchCreateArticle = async (token, formData) => {
    const response = await fetch(`${this.baseApi}articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ article: formData }),
    }).catch((error) => {
      throw new Error(error);
    });

    const result = await response.json();
    return result;
  };

  fetchEditArticle = async (token, slug, formData) => {
    const response = await fetch(`${this.baseApi}articles/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ article: formData }),
    }).catch((error) => {
      throw new Error(error);
    });

    const result = await response.json();
    return result;
  };

  fetchDeleteArticle = async (token, slug) => {
    const response = await fetch(`${this.baseApi}articles/${slug}`, {
      method: 'DELETE',
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
}
