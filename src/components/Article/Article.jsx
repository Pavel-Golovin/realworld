import React, { useState } from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { useMutation, useQueryClient } from 'react-query';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Popconfirm } from 'antd';
import { getRandomInt } from '../../utils/functions';
import useArticlesAuthor from './useArticlesAuthor';
import useArticleDel from './useArticleDel';
import 'antd/dist/antd.css';
import classes from './Article.module.scss';
import noAvatar from '../../pictures/noAvatar.jpg';
import BaseService from '../../services/baseService';
import { getToken } from '../../utils/localStorage';

/* eslint-disable */
const Article = ({ data, isFull = false }) => {
  const {
    title,
    favoritesCount,
    favorited,
    description,
    tagList,
    createdAt,
    slug,
    body,
    author: { username, image },
  } = data;
  const { currentUserName } = useArticlesAuthor(isFull);
  const { confirm, mutationDel } = useArticleDel(slug);

  const [like, setLike] = useState(favorited);
  const queryClient = useQueryClient();

  const mutationLike = useMutation(
    async () => {
      const baseService = new BaseService();
      const token = getToken();
      const res = await baseService.fetchFavoriteArticle(token, slug, like);
      return res;
    },
    {
      onSuccess: ({ article }) => {
        queryClient.invalidateQueries(['articleContainer']);
        setLike(article.favorited);
      },
    }
  );

  const onClickHeart = () => mutationLike.mutate();

  if (mutationDel.isSuccess) {
    return <Redirect push to="/" />;
  }

  return (
    <article className={classNames(classes.posts__article, classes.article)}>
      <header className={classes.article__header}>
        <div className={classes.article__titleWrapper}>
          <Link className={classes.article__title} to={`/articles/${slug}`}>
            {title}
          </Link>
          <div
            onClick={onClickHeart}
            className={classNames({
              [classes.article__heart]: true,
              [classes['article__heart--liked']]: like,
            })}
          />
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
      {isFull && currentUserName === username ? (
        <div className={classes.article__controlPanel}>
          <Popconfirm title="Are you sure to delete this article?" onConfirm={confirm} okText="Yes" cancelText="No">
            <button type="button" className={classes.article__delArticleBtn}>
              Delete
            </button>
          </Popconfirm>
          <Link className={classes.article__editArticleBtn} to={`/articles/${slug}/edit`}>
            Edit
          </Link>
        </div>
      ) : null}
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
