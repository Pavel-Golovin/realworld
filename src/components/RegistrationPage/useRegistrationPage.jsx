import { useMutation } from 'react-query';
import { useState } from 'react';
import UserService from '../../services/userService';
import { setToken } from '../../utils/localStorage';

const useRegistrationPage = () => {
  const [error, setError] = useState(null);

  const mutation = useMutation(async (formData) => {
    const userService = new UserService();
    const res = await userService.fetchRegistration(formData);
    if (typeof res.errors !== 'undefined') {
      setError(res.errors);
    } else {
      setToken(res.user.token);
    }
    return res;
  });

  const onSubmitHandler = (event) => mutation.mutate(event);

  return { error, onSubmitHandler };
};

export default useRegistrationPage;
