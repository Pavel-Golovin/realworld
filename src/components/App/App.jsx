import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import classes from './App.module.scss';
import ArticlesListContainer from '../../containers/ArticlesListContainer/ArticlesListContainer';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import LoginPage from '../LoginPage/LoginPage';

const App = () => (
  <Router>
    <div className={classes.app}>
      <header className={classes.app__header}>
        <a className={classes.app__title} href="#">
          Realworld Blog
        </a>
        <Link to="/sign-in" className={classes.app__signIn}>
          Sign in
        </Link>
        <Link to="/sign-up" className={classes.app__signUp}>
          Sign up
        </Link>
      </header>
      <Route path="/" component={ArticlesListContainer} exact />
      <Route path="/sign-up" component={RegistrationPage} exact />
      <Route path="/sign-in" component={LoginPage} exact />
      <Route path="/articles" component={ArticlesListContainer} exact />
      <Route path="/articles/:slug" render={({ match }) => <ArticleContainer slug={match.params.slug} />} exact />
    </div>
  </Router>
);

export default App;
