import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { getToken } from '../../utils/localStorage';

const useArticle = (isFull) => {
  const token = getToken();
  const queryClient = useQueryClient();
  const queryKey = ['userInformation', token];
  const [currentUserName, setCurrentUserName] = useState('');
  if (token) {
    if (isFull && queryClient.getQueryState(queryKey).data && !currentUserName) {
      setCurrentUserName(queryClient.getQueryState(queryKey).data.user.username);
    }
  }

  return { currentUserName };
};

export default useArticle;
