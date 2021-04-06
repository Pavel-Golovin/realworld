export default class ArticleService {
  baseApi = `https://conduit.productionready.io/api/`;

  fetchArticles = async (page) => {
    const articles = await fetch(`${this.baseApi}articles?limit=10&offset=${(page - 1) * 5}`).catch((error) => {
      throw new Error(error);
    });
    if (!articles.ok) {
      throw new Error(`Code status: ${articles.status}`);
    }
    const body = await articles.json();
    return body;
  };

  fetchSingleArticle = async (slug) => {
    const singleArticle = await fetch(`${this.baseApi}articles/${slug}`).catch((error) => {
      throw new Error(error);
    });
    if (!singleArticle.ok) {
      throw new Error(`Code status: ${singleArticle.status}`);
    }
    const body = await singleArticle.json();
    return body;
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

  fetchFavoriteArticle = async (token, slug, isFavorited) => {
    const method = isFavorited ? 'DELETE' : 'POST';
    const response = await fetch(`${this.baseApi}articles/${slug}/favorite`, {
      method,
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
