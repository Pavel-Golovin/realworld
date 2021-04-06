import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import UserService from '../../services/userService';
import { getToken } from '../../utils/localStorage';

const useProfile = () => {
  const [user, setUser] = useState({
    email: '',
    image: '',
    username: '',
  });
  const [error, setError] = useState(null);
  const token = getToken();
  const QUERY_KEY = ['userInformation', token];
  const queryClient = useQueryClient();

  if (!user.email && queryClient.getQueryState(QUERY_KEY).data) {
    const { email, image, username } = queryClient.getQueryState(QUERY_KEY).data.user;
    setUser({ email, image, username });
  }

  const mutation = useMutation(async (formData) => {
    const userService = new UserService();
    const res = await userService.fetchUpdateUser(token, formData);
    if (typeof res.errors !== 'undefined') {
      setError(res.errors);
    }
    return res;
  });

  const onSubmitHandler = (event) =>
    mutation.mutate(event, { onSuccess: () => queryClient.invalidateQueries(QUERY_KEY) });

  return { user, error, mutation, onSubmitHandler };
};

export default useProfile;
