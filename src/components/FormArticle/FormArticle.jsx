import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import classes from './FormArticle.module.scss';
import TagsList from '../TagsList/TagsList';
import useFormValidation from '../../hooks/useFromValidation';
import useFormArticle from './useFormArticle';

const FormArticle = ({ title = '', description = '', body = '', tagList = [], slug = '', isEditing = false }) => {
  const { content, newTag, isPosted, onChangeNewTagFld, onClickAddTagBtn, onSubmitHandler } = useFormArticle(
    tagList,
    slug,
    isEditing
  );
  const {
    handleSubmit,
    errors,
    articleTitleValidation,
    articleDescriptionValidation,
    articleTextValidation,
  } = useFormValidation();

  return isPosted ? (
    <Redirect push to="/" />
  ) : (
    <form className={classes.formArticle} onSubmit={handleSubmit(onSubmitHandler)}>
      <label className={classes.formArticle__titleLbl}>
        <p className={classes.formArticle__fieldName}>Title</p>
        <input
          className={classes.formArticle__field}
          name="title"
          type="text"
          placeholder="Title"
          ref={articleTitleValidation}
          defaultValue={title}
        />
      </label>
      {errors.title && <p className={classes.errorMessage}>{errors.title.message}</p>}
      <label className={classes.formArticle__descriptionLbl}>
        <p className={classes.formArticle__fieldName}>Short description</p>
        <input
          className={classes.formArticle__field}
          name="description"
          type="text"
          placeholder="Title"
          ref={articleDescriptionValidation}
          defaultValue={description}
        />
      </label>
      {errors.description && <p className={classes.errorMessage}>{errors.description.message}</p>}
      <label className={classes.formArticle__textLbl}>
        <p className={classes.formArticle__fieldName}>Text</p>
        <textarea
          className={classes.formArticle__field}
          name="body"
          placeholder="Text"
          ref={articleTextValidation}
          defaultValue={body}
          rows="7"
        />
      </label>
      {errors.body && <p className={classes.errorMessage}>{errors.body.message}</p>}
      <div className={classes.formArticle__tagsWrp}>
        <h2 className={classes.formArticle__tagsTitle}>Tags</h2>
        <TagsList tagList={content} />
        <div className={classes.formArticle__tagsControl}>
          <input
            className={classNames(classes.formArticle__field, classes['formArticle__field--newTag'])}
            type="text"
            onChange={onChangeNewTagFld}
            value={newTag}
            placeholder="Tag"
          />
          <button className={classes.formArticle__addTagBtn} onClick={onClickAddTagBtn} type="button">
            Add tag
          </button>
        </div>
      </div>
      <button className={classes.formArticle__submitBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default FormArticle;

FormArticle.defaultProps = {
  title: '',
  description: '',
  body: '',
  tagList: [],
  slug: '',
  isEditing: false,
};

FormArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  tagList: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string,
  isEditing: PropTypes.bool,
};
