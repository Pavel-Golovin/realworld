import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Tag from '../Tag/Tag';
import { getToken } from '../../utils/localStorage';
import BaseService from '../../services/baseService';

const useFormArticle = (tags = []) => {
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
    const res = await baseService.fetchCreateArticle(getToken(), { ...data, tagList: [...tagList] });
    return res;
  });

  const onSubmitHandler = (event) => mutation.mutate(event);

  const content = Array.from(tagList).map((tag) => <Tag tagName={tag} onDelete={() => onDeleteTag(tag)} />);

  return {
    content,
    newTag,
    onChangeNewTagFld,
    onClickAddTagBtn,
    onSubmitHandler,
  };
};

export default useFormArticle;
