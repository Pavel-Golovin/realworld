import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LoggedOutUser.module.scss';

const LoggedOutUser = () => (
  <>
    <Link to="/sign-in" className={classes.app__signIn}>
      Sign in
    </Link>
    <Link to="/sign-up" className={classes.app__signUp}>
      Sign up
    </Link>
  </>
);

export default LoggedOutUser;
