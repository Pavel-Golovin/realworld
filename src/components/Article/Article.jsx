import React from 'react';
import classNames from 'classnames';
import classes from './Article.module.scss';
import icon from '../../pictures/anyUserIcon.png';

const Article = () => (
  <article className={classNames(classes.posts__article, classes.article)}>
    <header className={classes.article__header}>
      <div className={classes.article__titleWrapper}>
        <a className={classes.article__title} href="#">
          Some article title
        </a>
        <div className={classes.article__heart} />
        <span className={classes.article__heartsCount}>12</span>
      </div>
      <ul className={classes.article__tags}>
        <li className={classes.article__tag}>Tag1</li>
        <li className={classes.article__tag}>SomeTag</li>
      </ul>
      <p className={classes.article__description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    </header>
    <section className={classes.article__authorInfo}>
      <div className={classes.article__userInfo}>
        <span className={classes.article__userName}>John Doil</span>
        <span className={classes.article__date}>March, 5, 2020</span>
      </div>
      <img className={classes.article__userAvatar} src={icon} alt="Аватар" />
    </section>
  </article>
);

export default Article;
