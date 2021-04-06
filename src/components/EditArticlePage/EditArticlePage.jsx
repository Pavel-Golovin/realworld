import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './EditArticlePage.module.scss';
import FormArticle from '../FormArticle/FormArticle';
import useEditArticleAutocomplete from './useEditArticleAutocomplete';

const EditArticlePage = ({ slug }) => {
  const { token, title, description, body, tagList } = useEditArticleAutocomplete(slug);

  return token ? (
    <section className={classes.editArticlePage}>
      <h2 className={classes.editArticlePage__title}>Edit article</h2>
      <FormArticle title={title} description={description} body={body} tagList={tagList} slug={slug} isEditing />
    </section>
  ) : (
    <Redirect push to="/sign-in" />
  );
};

export default EditArticlePage;

EditArticlePage.propTypes = {
  slug: PropTypes.string.isRequired,
};
