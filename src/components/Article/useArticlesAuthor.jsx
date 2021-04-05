import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { getToken } from '../../utils/localStorage';

const useArticlesAuthor = (isFull) => {
  const token = getToken();
  const queryKey = ['userInformation', token];
  const [currentUserName, setCurrentUserName] = useState('');
  const userData = useQueryClient().getQueryState(queryKey).data;
  if (token) {
    if (isFull && userData && !currentUserName) {
      setCurrentUserName(userData.user.username);
    }
  }

  return { currentUserName };
};

export default useArticlesAuthor;
