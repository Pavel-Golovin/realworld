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
}
