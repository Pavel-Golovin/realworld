import React from 'react';
import PropTypes from 'prop-types';
import classes from './ArticlesList.module.scss';

const ArticlesList = ({ articles }) => (
  <ul className={classes.articleslist}>
    {articles.map((article) => (
      <li key={article.props.id}>{article}</li>
    ))}
  </ul>
);

ArticlesList.defaultProps = {
  articles: [],
};

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

export default ArticlesList;
