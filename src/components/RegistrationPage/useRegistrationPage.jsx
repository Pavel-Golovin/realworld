import { useMutation } from 'react-query';
import { useState } from 'react';
import BaseService from '../../services/baseService';

const useRegistrationPage = () => {
  const [error, setError] = useState(null);

  const mutation = useMutation(async (formData) => {
    const baseService = new BaseService();
    const res = await baseService.fetchRegistration(formData);
    if (typeof res.errors !== 'undefined') {
      setError(res.errors);
    }
    return res;
  });

  const onSubmitHandler = (event) => mutation.mutate(event);

  return [error, onSubmitHandler];
};

export default useRegistrationPage;
