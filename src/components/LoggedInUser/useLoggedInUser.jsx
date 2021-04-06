import { useQuery } from 'react-query';
import { getToken } from '../../utils/localStorage';
import UserService from '../../services/userService';

const useLoggedInUser = () => {
  const token = getToken();

  const { data, isSuccess: hasDataUser } = useQuery(
    ['userInformation', token],
    () => {
      const userService = new UserService();
      return userService.fetchCurrentUser(token);
    },
    {
      staleTime: 10,
      cacheTime: 0,
    }
  );

  return { data, hasDataUser };
};

export default useLoggedInUser;
