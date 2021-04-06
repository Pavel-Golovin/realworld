import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Tag from '../Tag/Tag';
import { getToken } from '../../utils/localStorage';
import ArticleService from '../../services/articleService';

const useFormArticle = (tags = [], slug = '', isEditing = false) => {
  const [newTag, setNewTag] = useState('');
  const [tagList, updateTagList] = useState(new Set(tags));

  const onChangeNewTagFld = (event) => setNewTag(event.target.value);
  const onClickAddTagBtn = () => {
    updateTagList(tagList.add(newTag));
    setNewTag('');
  };
  const onDeleteTag = (tag) => {
    const tagsNewSet = new Set([...tagList]);
    tagsNewSet.delete(tag);
    updateTagList(new Set(tagsNewSet));
  };

  const mutation = useMutation(async (data) => {
    const articleService = new ArticleService();
    const token = getToken();
    let res;
    if (!isEditing) {
      res = await articleService.fetchCreateArticle(token, { ...data, tagList: [...tagList] });
    } else {
      res = await articleService.fetchEditArticle(token, slug, { ...data, tagList: [...tagList] });
    }
    return res;
  });

  const isPosted = mutation.isSuccess;

  const onSubmitHandler = (event) => mutation.mutate(event);

  const content = Array.from(tagList).map((tag) => <Tag tagName={tag} onDelete={() => onDeleteTag(tag)} />);

  return {
    content,
    newTag,
    isPosted,
    onChangeNewTagFld,
    onClickAddTagBtn,
    onSubmitHandler,
  };
};

export default useFormArticle;
