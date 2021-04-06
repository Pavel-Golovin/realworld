import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { getToken } from '../../utils/localStorage';
import ArticleService from '../../services/articleService';

const useLikeArticle = (favorited, slug) => {
  const token = getToken();
  const [isLiked, toggleLike] = useState(favorited);
  const [isAuthorized, setIsAuthorized] = useState(true);

  const queryClient = useQueryClient();

  const mutationLike = useMutation(
    async () => {
      const res = await new ArticleService().fetchFavoriteArticle(token, slug, isLiked);
      return res;
    },
    {
      onSuccess: ({ article }) => {
        queryClient.invalidateQueries(['articleContainer']);
        toggleLike(article.favorited);
      },
    }
  );

  const onClickHeart = () => {
    if (token) {
      mutationLike.mutate();
    } else {
      setIsAuthorized(false);
    }
  };

  return { onClickHeart, isLiked, isAuthorized };
};

export default useLikeArticle;
