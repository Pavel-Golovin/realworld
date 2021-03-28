import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import classes from './LoginPage.module.scss';
import useFormValidation from '../../hooks/useFromValidation';
import useLoginPage from './useLoginPage';
import { getToken } from '../../utils/localStorage';

const LoginPage = () => {
  const { handleSubmit, errors, emailValidation, passwordValidation } = useFormValidation();
  const [error, onSubmitHandler] = useLoginPage();

  return getToken() ? (
    <Redirect to="/" />
  ) : (
    <section className={classes.signIn}>
      <form className={classes.signIn__form} onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 className={classes.signIn__title}>Sign in</h2>
        <label>
          <p className={classes.signIn__titleField}>Email address</p>
          <input
            className={classes.signIn__input}
            name="email"
            type="email"
            placeholder="Email address"
            ref={emailValidation}
          />
          {errors.email && <p className={classes.errorMessage}>{errors.email.message}</p>}
        </label>
        <label>
          <p className={classes.signIn__titleField}>Password</p>
          <input
            className={classes.signIn__input}
            name="password"
            type="password"
            placeholder="Password"
            ref={passwordValidation}
          />
          {errors.password && <p className={classes.errorMessage}>{errors.password.message}</p>}
        </label>
        {error ? <p className={classes.errorMessage}>Email or password {error['email or password'].join()}</p> : null}
        <button className={classes.signIn__submitBtn} type="submit">
          Create
        </button>
        <p className={classes.signIn__question}>
          Don’t have an account?{' '}
          <Link to="/sign-up" className={classes.link}>
            Sign Up.
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
