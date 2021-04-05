import React, { useState } from 'react';
import { Pagination, Spin, Alert } from 'antd';
import { useQuery } from 'react-query';
import BaseService from '../../services/baseService';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import Article from '../../components/Article/Article';

const ArticlesListContainer = () => {
  const [page, setPage] = useState(1);

  const onChangePage = (newPage) => setPage(newPage);

  const { isLoading, isError, isSuccess, error, data } = useQuery(
    ['articleContainer', page],
    () => {
      const baseService = new BaseService();
      return baseService.fetchArticles(page);
    },
    { retry: false }
  );

  const prepareArticles = (dataArticles) =>
    dataArticles.map((singleArticle) => <Article id={singleArticle.slug} data={singleArticle} />);

  const loader = isLoading ? <Spin tip="Loading..." size="large" /> : null;
  const errorMessage = isError ? <Alert type="error" message="Error" description={error.message} showIcon /> : null;
  const content = isSuccess ? <ArticlesList articles={prepareArticles(data.articles)} /> : null;

  return (
    <>
      {loader}
      {errorMessage}
      {content}
      <Pagination pageSize={5} page={page} total={500} showSizeChanger={false} onChange={onChangePage} />
    </>
  );
};

export default ArticlesListContainer;
