import React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './CreateArticlePage.module.scss';
import FormArticle from '../FormArticle/FormArticle';
import { getToken } from '../../utils/localStorage';

const CreateArticlePage = () =>
  getToken() ? (
    <section className={classes.FormArticle__wrapper}>
      <h2>Create new article</h2>
      <FormArticle />
    </section>
  ) : (
    <Redirect push to="/sign-in" />
  );

export default CreateArticlePage;
