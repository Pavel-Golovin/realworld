import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import classes from './EditArticlePage.module.scss';
import { getToken } from '../../utils/localStorage';
import FormArticle from '../FormArticle/FormArticle';
/* eslint-disable */

const EditArticlePage = ({ slug }) => {
  const token = getToken();
  const queryClient = new useQueryClient();
  const queryKey = ['articlePage', slug];
  const [capture, setCapture] = useState({
    title: '',
    description: '',
    body: '',
    tagList: [],
  });

  if (!capture.title && queryClient.getQueryState(queryKey)) {
    setCapture(queryClient.getQueryState(queryKey).data.article);
  }

  const { title, description, body, tagList } = capture;

  return token ? (
    <section className={classes.FormArticle__wrapper}>
      <h2>Edit article</h2>
      <FormArticle title={title} description={description} body={body} tagList={tagList} />
    </section>
  ) : (
    <Redirect push to="/sign-in" />
  );
};

export default EditArticlePage;
