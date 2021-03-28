import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getRandomInt } from '../../utils/functions';
import classes from './Article.module.scss';
import noAvatar from '../../pictures/noAvatar.jpg';

const Article = ({ data, isFull = false }) => {
  const {
    title,
    favoritesCount,
    description,
    tagList,
    createdAt,
    slug,
    body,
    author: { username, image },
  } = data;

  return (
    <article className={classNames(classes.posts__article, classes.article)}>
      <header className={classes.article__header}>
        <div className={classes.article__titleWrapper}>
          <Link className={classes.article__title} to={`/articles/${slug}`}>
            {title}
          </Link>
          <div className={classes.article__heart} />
          <span className={classes.article__heartsCount}>{favoritesCount}</span>
        </div>
        <ul className={classes.article__tags}>
          {tagList.map((tag) => (
            <li key={`${slug}${getRandomInt(1, 20)}${getRandomInt(1, 30)}`} className={classes.article__tag}>
              {tag}
            </li>
          ))}
        </ul>
        <p className={classes.article__description}>{description}</p>
        <section>{isFull ? <ReactMarkdown source={body} /> : null}</section>
      </header>
      <section className={classes.article__authorInfo}>
        <div className={classes.article__userInfo}>
          <span className={classes.article__userName}>{username}</span>
          <span className={classes.article__date}>{format(new Date(createdAt), 'MMMM, d, yyyy')}</span>
        </div>
        <img
          className={classes.article__userAvatar}
          // eslint-disable-next-line no-extra-boolean-cast
          src={!!image ? image : noAvatar}
          alt="Аватар автора статьи"
        />
      </section>
    </article>
  );
};

Article.defaultProps = {
  data: {},
  isFull: false,
};

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    favoritesCount: PropTypes.number,
    description: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    slug: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.shape({
      username: PropTypes.string,
      image: PropTypes.string,
    }),
  }),
  isFull: PropTypes.bool,
};

export default Article;
