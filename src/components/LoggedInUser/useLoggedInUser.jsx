import { useQuery } from 'react-query';
import { getToken } from '../../utils/localStorage';
import BaseService from '../../services/baseService';

const useLoggedInUser = () => {
  const token = getToken();

  const { data, isSuccess: hasDataUser } = useQuery(
    ['userInformation', token],
    () => {
      const baseService = new BaseService();
      return baseService.fetchCurrentUser(token);
    },
    {
      staleTime: 10,
      cacheTime: 0,
    }
  );

  return { data, hasDataUser };
};

export default useLoggedInUser;
