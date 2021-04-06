import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Tag from '../Tag/Tag';
import { getToken } from '../../utils/localStorage';
import BaseService from '../../services/baseService';

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
    const baseService = new BaseService();
    const token = getToken();
    let res;
    if (!isEditing) {
      res = await baseService.fetchCreateArticle(token, { ...data, tagList: [...tagList] });
    } else {
      res = await baseService.fetchEditArticle(token, slug, { ...data, tagList: [...tagList] });
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
