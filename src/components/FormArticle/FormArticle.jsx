import React from 'react';
import classes from '../CreateArticlePage/CreateArticlePage.module.scss';
import TagsList from '../TagsList/TagsList';
import useFormValidation from '../../hooks/useFromValidation';
import useFormArticle from './useFormArticle';

/* eslint-disable */

const FormArticle = ({ title = '', description = '', body = '', tagList = [], slug = '', isEditing = false }) => {
  const { content, newTag, onChangeNewTagFld, onClickAddTagBtn, onSubmitHandler } = useFormArticle(
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

  return (
    <form className={classes.FormArticle__form} onSubmit={handleSubmit(onSubmitHandler)}>
      <label className={classes.FormArticle__titleLbl}>
        <p className={classes.FormArticle__fieldName}>Title</p>
        <input name="title" type="text" placeholder="Title" ref={articleTitleValidation} defaultValue={title} />
      </label>
      {errors.title && <p className={classes.errorMessage}>{errors.title.message}</p>}
      <label className={classes.FormArticle__descriptionLbl}>
        <p className={classes.FormArticle__fieldName}>Short description</p>
        <input
          name="description"
          type="text"
          placeholder="Title"
          ref={articleDescriptionValidation}
          defaultValue={description}
        />
      </label>
      {errors.description && <p className={classes.errorMessage}>{errors.description.message}</p>}
      <label className={classes.FormArticle__textLbl}>
        <p className={classes.FormArticle__fieldName}>Text</p>
        <textarea name="body" placeholder="Text" ref={articleTextValidation} defaultValue={body} />
      </label>
      {errors.body && <p className={classes.errorMessage}>{errors.body.message}</p>}
      <div className={classes.FormArticle__tagsWrp}>
        <h2 className={classes.FormArticle__tagsTitle}>Tags</h2>
        <TagsList tagList={content} />
        <div className={classes.FormArticle__tagsControl}>
          <input
            className={classes.FormArticle__newTagFld}
            type="text"
            onChange={onChangeNewTagFld}
            value={newTag}
            placeholder="Tag"
          />
          <button className={classes.FormArticle__addTagBtn} onClick={onClickAddTagBtn} type="button">
            Add tag
          </button>
        </div>
      </div>
      <button className={classes.FormErticle__FormArticle__submitBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default FormArticle;
