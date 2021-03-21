export default class BaseService {
  baseApi = `https://conduit.productionready.io/api/`;

  fetchArticles = async (page) => {
    const res = await fetch(`${this.baseApi}articles?limit=10&offset=${(page - 1) * 5}`);
    if (!res.ok) {
      throw Error(`Что-то пошло не так`);
    }
    const body = await res.json();
    return body;
  };
}
