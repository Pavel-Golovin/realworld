import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import classes from './LoggedInUser.module.scss';
import noAvatar from '../../pictures/noAvatar.jpg';
import { removeToken, getToken } from '../../utils/localStorage';
import BaseService from '../../services/baseService';

const LoggedInUser = () => {
  const token = getToken();

  const { data, isSuccess } = useQuery(
    ['userInformation', token],
    () => {
      const baseService = new BaseService();
      return baseService.fetchCurrentUser(token);
    },
    {
      staleTime: 10,
      cacheTime: 0,
    }
  );

  return isSuccess ? (
    <>
      <Link to="/new-article" className={classes.LoggedInUser__createArticle}>
        Create article
      </Link>
      <Link className={classes.LoggedInUser__linkToProfile} to="/profile">
        <p className={classes.LoggedInUser__userName}>{data.user.username}</p>
        <img
          className={classes.LoggedInUser__userAvatar}
          // eslint-disable-next-line no-extra-boolean-cast
          src={!!data.user.image ? data.user.image : noAvatar}
          alt="Аватар пользователя"
        />
      </Link>
      <Link className={classes.LoggedInUser__logOut} to="/" onClick={removeToken}>
        Log Out
      </Link>
    </>
  ) : null;
};

export default LoggedInUser;
