import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Tag from '../Tag/Tag';
import { getToken } from '../../utils/localStorage';
import BaseService from '../../services/baseService';

const useFormArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [newTag, setNewTag] = useState('');
  const [tagList, updateTagList] = useState(new Set());

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeDescription = (event) => setDescription(event.target.value);
  const onChangeBody = (event) => setBody(event.target.value);
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

  const mutation = useMutation(async (formData) => {
    const baseService = new BaseService();
    const res = await baseService.fetchCreateArticle(getToken(), formData);
    console.log(res);
    return res;
  });

  const onSubmitHandler = (event) => {
    console.log(event);
    const formData = {
      article: {
        title,
        description,
        body,
        tagList: [...tagList],
      },
    };
    mutation.mutate(formData);
  };

  const content = Array.from(tagList).map((tag) => <Tag tagName={tag} onDelete={() => onDeleteTag(tag)} />);

  return {
    content,
    title,
    description,
    body,
    newTag,
    onChangeTitle,
    onChangeDescription,
    onChangeBody,
    onChangeNewTagFld,
    onClickAddTagBtn,
    onSubmitHandler,
  };
};

export default useFormArticle;
