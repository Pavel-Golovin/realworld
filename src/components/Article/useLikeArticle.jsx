import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { getToken } from '../../utils/localStorage';
import ArticleService from '../../services/articleService';

const useLikeArticle = (favorited, slug) => {
  const [isLiked, toggleLike] = useState(favorited);
  const queryClient = useQueryClient();

  const mutationLike = useMutation(
    async () => {
      const res = await new ArticleService().fetchFavoriteArticle(getToken(), slug, isLiked);
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
