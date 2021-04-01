import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import classes from './App.module.scss';
import ArticlesListContainer from '../../containers/ArticlesListContainer/ArticlesListContainer';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import LoginPage from '../LoginPage/LoginPage';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import CreateArticlePage from '../CreateArticlePage/CreateArticlePage';
import EditArticlePage from '../EditArticlePage/EditArticlePage';

const App = () => (
  <Router>
    <div className={classes.app}>
      <Route path="/" component={Header} />
      <Route path="/" component={ArticlesListContainer} exact />
      <Route path="/profile" component={Profile} exact />
      <Route path="/new-article" component={CreateArticlePage} exact />
      <Route path="/sign-up" component={RegistrationPage} exact />
      <Route path="/sign-in" component={LoginPage} exact />
      <Route path="/articles/:slug/edit" render={({ match }) => <EditArticlePage slug={match.params.slug} />} exact />
      <Route path="/articles" component={ArticlesListContainer} exact />
      <Route path="/articles/:slug" render={({ match }) => <ArticleContainer slug={match.params.slug} />} exact />
    </div>
  </Router>
);

export default App;
