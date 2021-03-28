import { useState } from 'react';
import { useMutation } from 'react-query';
import BaseService from '../../services/baseService';

const useLoginPage = () => {
  const [error, setError] = useState(null);

  const mutation = useMutation(async (formData) => {
    const baseService = new BaseService();
    const res = await baseService.fetchLogin(formData);
    if (typeof res.errors !== 'undefined') {
      setError(res.errors);
    }
    return res;
  });

  const onSubmitHandler = (event) => {
    mutation.mutate(event);
  };

  return [error, onSubmitHandler];
};

export default useLoginPage;
