import React, { useState } from 'react';
import classNames from 'classnames';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { useQuery } from 'react-query';
import classes from './App.module.scss';
import Article from '../Article/Article';
import BaseService from '../../services/baseService';

const Content = ({ page }) => {
  // eslint-disable-line

  const baseService = new BaseService();

  const { isLoading, isError, error, data } = useQuery(['repoData', page], () => baseService.fetchArticles(page), {
    staleTime: 10000,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>{`Error: ${error.message}`}</p>;

  console.log(data.articles);

  return (
    <ul className={classNames(classes.app__list, classes.posts)}>
      <li className={classes.posts__item}>
        <Article />
      </li>
      <li className={classes.posts__item}>
        <Article />
      </li>
      <li className={classes.posts__item}>
        <Article />
      </li>
      <li className={classes.posts__item}>
        <Article />
      </li>
      <li className={classes.posts__item}>
        <Article />
      </li>
    </ul>
  );
};

const App = () => {
  const [page, setPage] = useState(1);

  const onChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className={classes.app}>
      <header className={classes.app__header}>
        <a className={classes.app__title} href="#">
          Realworld Blog
        </a>
        <a className={classes.app__signIn} href="#">
          Sign in
        </a>
        <a className={classes.app__signUp} href="#">
          Sign up
        </a>
      </header>
      <Content page={page} />
      <Pagination pageSize={5} page={page} total={500} showSizeChanger={false} onChange={onChangePage} />
    </div>
  );
};

export default App;
