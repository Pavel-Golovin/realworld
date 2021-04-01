import React from 'react';
import classes from './CreateArticlePage.module.scss';
import FormArticle from '../FormArticle/FormArticle';

const CreateArticlePage = () => (
  <section className={classes.FormArticle__wrapper}>
    <h2>Create new article</h2>
    <FormArticle />
  </section>
);

export default CreateArticlePage;
