import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { getToken } from '../../utils/localStorage';
import BaseService from '../../services/baseService';

const useLikeArticle = (favorited, slug) => {
  const [isLiked, toggleLike] = useState(favorited);
  const queryClient = useQueryClient();

  const mutationLike = useMutation(
    async () => {
      const baseService = new BaseService();
      const token = getToken();
      const res = await baseService.fetchFavoriteArticle(token, slug, isLiked);
      return res;
    },
    {
      onSuccess: ({ article }) => {
        queryClient.invalidateQueries(['articleContainer']);
        toggleLike(article.favorited);
      },
    }
  );

  const onClickHeart = () => mutationLike.mutate();

  return { onClickHeart, isLiked };
};

export default useLikeArticle;
