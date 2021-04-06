import { useMutation } from 'react-query';
import { getToken } from '../../utils/localStorage';
import ArticleService from '../../services/articleService';

const useArticleDel = (slug) => {
  const mutationDel = useMutation(async () => {
    const res = await new ArticleService().fetchDeleteArticle(getToken(), slug);
    return res;
  });

  const onConfirmToDelete = () => mutationDel.mutate();
  const { isSuccess: isDeleted } = mutationDel;

  return { onConfirmToDelete, isDeleted };
};

export default useArticleDel;
