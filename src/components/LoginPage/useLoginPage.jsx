import { useState } from 'react';
import { useMutation } from 'react-query';
import { setToLocalStorage, getFromLocalStorage } from '../../services/localStorageService';
import BaseService from '../../services/baseService';

const useLoginPage = () => {
  const [error, setError] = useState(null);

  const mutation = useMutation(async (formData) => {
    const baseService = new BaseService();
    const res = await baseService.fetchLogin(formData);
    if (typeof res.errors !== 'undefined') {
      setError(res.errors);
    } else {
      setToLocalStorage('Token', res.user.token);
    }
    return res;
  });

  const token = getFromLocalStorage('Token');

  console.log(token);

  const onSubmitHandler = (event) => {
    mutation.mutate(event);
  };

  return [token, error, onSubmitHandler];
};

export default useLoginPage;
