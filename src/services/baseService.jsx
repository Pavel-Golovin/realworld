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
