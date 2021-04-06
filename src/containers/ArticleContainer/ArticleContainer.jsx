import React from 'react';
import { useQuery } from 'react-query';
import { Alert, Spin } from 'antd';
import PropTypes from 'prop-types';
import Article from '../../components/Article/Article';
import ArticleService from '../../services/articleService';

const ArticleContainer = ({ slug }) => {
  const { isLoading, isError, error, data } = useQuery(
    ['articleContainer', slug],
    () => {
      const articleService = new ArticleService();
      return articleService.fetchSingleArticle(slug);
    },
    { retry: false }
  );

  if (isLoading) return <Spin tip="Loading..." size="large" />;
  if (isError) return <Alert type="error" message="Error" description={error.message} showIcon />;

  return <Article data={data.article} isFull />;
};

ArticleContainer.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ArticleContainer;
