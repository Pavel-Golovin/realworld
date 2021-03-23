import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './ArticlesList.module.scss';

const ArticlesList = ({ articles }) => (
  <ul className={classNames(classes.app__list, classes.posts)}>
    {articles.map((article) => (
      <li key={article.props.id} className={classes.posts__item}>
        {article}
      </li>
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
