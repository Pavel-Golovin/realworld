import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { getToken } from '../../utils/localStorage';

const useEditArticleAutocomplete = (slug) => {
  const token = getToken();
  const queryData = useQueryClient().getQueryState(['articleContainer', slug])?.data.article;
  const [capture, setCapture] = useState({
    title: '',
    description: '',
    body: '',
    tagList: [],
  });

  if (!capture.title && queryData) {
    setCapture(queryData);
  }

  const { title, description, body, tagList } = capture;

  return { token, title, description, body, tagList };
};

export default useEditArticleAutocomplete;
