import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import BaseService from '../../services/baseService';
import { getToken } from '../../utils/localStorage';

const useProfile = () => {
  const [error, setError] = useState(null);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (formData) => {
      const baseService = new BaseService();
      const res = await baseService.fetchUpdateUser(getToken(), formData);
      if (typeof res.errors !== 'undefined') {
        setError(res.errors);
      }
      return res;
    },
    { onSuccess: () => queryClient.invalidateQueries('userInformation') }
  );

  const onSubmitHandler = (event) => mutation.mutate(event);

  return [error, mutation, onSubmitHandler];
};

export default useProfile;
