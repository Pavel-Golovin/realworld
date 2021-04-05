import { useMutation } from 'react-query';
import { getToken } from '../../utils/localStorage';
import BaseService from '../../services/baseService';

const useArticleDel = (slug) => {
  const mutationDel = useMutation(async () => {
    const token = getToken();
    const baseService = new BaseService();
    const res = await baseService.fetchDeleteArticle(token, slug);
    return res;
  });

  const confirm = () => mutationDel.mutate();

  return { confirm, mutationDel };
};

export default useArticleDel;
