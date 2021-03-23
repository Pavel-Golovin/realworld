import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import classes from './App.module.scss';
import ArticlesListContainer from '../../containers/ArticlesListContainer/ArticlesListContainer';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';

const App = () => (
  <Router>
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
      <Route path="/" component={ArticlesListContainer} exact />
      <Route path="/articles" component={ArticlesListContainer} exact />
      <Route path="/articles/:slug" render={({ match }) => <ArticleContainer slug={match.params.slug} />} exact />
    </div>
  </Router>
);

export default App;
