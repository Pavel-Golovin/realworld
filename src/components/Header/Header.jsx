import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { getToken } from '../../utils/localStorage';
import LoggedOutUser from '../LoggedOutUser/LoggedOutUser';
import LoggedInUser from '../LoggedInUser/LoggedInUser';

const Header = () => (
  <header className={classes.app__header}>
    <Link to="/" className={classes.app__title} href="#">
      Realworld Blog
    </Link>
    {getToken() ? <LoggedInUser /> : <LoggedOutUser />}
  </header>
);

export default Header;
