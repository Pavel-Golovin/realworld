import { useState } from 'react';
import { useMutation } from 'react-query';
import { setToken } from '../../utils/localStorage';
import UserService from '../../services/userService';

const useLoginPage = () => {
  const [error, setError] = useState(null);

  const mutation = useMutation(async (formData) => {
    const userService = new UserService();
    const res = await userService.fetchLogin(formData);
    if (typeof res.errors !== 'undefined') {
      setError(res.errors);
    } else {
      setToken(res.user.token);
    }
    return res;
  });

  const onSubmitHandler = (event) => mutation.mutate(event);

  return [error, onSubmitHandler];
};

export default useLoginPage;
