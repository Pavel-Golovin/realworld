import { useMutation } from 'react-query';
import { getToken } from '../../utils/localStorage';
import BaseService from '../../services/baseService';

const useArticleDel = (slug) => {
  const mutationDel = useMutation(async () => {
    const res = await new BaseService().fetchDeleteArticle(getToken(), slug);
    return res;
  });

  const onConfirmToDelete = () => mutationDel.mutate();
  const { isSuccess: isDeleted } = mutationDel;

  return { onConfirmToDelete, isDeleted };
};

export default useArticleDel;
