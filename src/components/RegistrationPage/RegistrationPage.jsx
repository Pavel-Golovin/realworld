import React from 'react';
import { Link } from 'react-router-dom';
import classes from './RegistrationPage.module.scss';
import useFormValidation from '../../hooks/useFromValidation';
import useRegistrationPage from './useRegistrationPage';

const RegistrationPage = () => {
  const {
    handleSubmit,
    errors,
    usernameValidation,
    emailValidation,
    passwordValidation,
    passwordRepeatValidation,
    agreementSettingsValidation,
  } = useFormValidation();
  const [error, onSubmitHandler] = useRegistrationPage();

  return (
    <section className={classes.signUp}>
      <form className={classes.signUp__form} onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 className={classes.signUp__title}>Create new account</h2>
        <label>
          <p className={classes.signUp__titleField}>Username</p>
          <input
            className={classes.signUp__input}
            type="text"
            name="username"
            placeholder="Username"
            ref={usernameValidation}
          />
          {errors.username && <p className={classes.errorMessage}>{errors.username.message}</p>}
          {error ? <p className={classes.errorMessage}>Username {error.username.join()}</p> : null}
        </label>
        <label>
          <p className={classes.signUp__titleField}>Email address</p>
          <input
            className={classes.signUp__input}
            name="email"
            type="email"
            placeholder="Email address"
            ref={emailValidation}
          />
          {errors.email && <p className={classes.errorMessage}>{errors.email.message}</p>}
          {error ? <p className={classes.errorMessage}>Email {error.email.join()}</p> : null}
        </label>
        <label>
          <p className={classes.signUp__titleField}>Password</p>
          <input
            className={classes.signUp__input}
            name="password"
            type="password"
            placeholder="Password"
            ref={passwordValidation}
          />
          {errors.password && <p className={classes.errorMessage}>{errors.data}</p>}
        </label>
        <label>
          <p className={classes.signUp__titleField}>Repeat Password</p>
          <input
            className={classes.signUp__input}
            name="repeatPassword"
            type="password"
            placeholder="Password"
            ref={passwordRepeatValidation}
          />
          {errors.repeatPassword && <p className={classes.errorMessage}>{errors.repeatPassword.message}</p>}
        </label>
        <label className={classes.signUp__agreementLbl}>
          <input
            className={classes.signUp__agreementChBox}
            name="agreement"
            type="checkbox"
            ref={agreementSettingsValidation}
          />
          <p className={classes.signUp__agreement}>I agree to the processing of my personal information</p>
        </label>
        {errors.agreement && <p className={classes.errorMessage}>{errors.agreement.message}</p>}
        <button className={classes.signUp__submitBtn} type="submit">
          Create
        </button>
        <p className={classes.signUp__question}>
          Already have an account?{' '}
          <Link to="/sign-in" className={classes.link}>
            Sign In.
          </Link>
        </p>
      </form>
    </section>
  );
};

export default RegistrationPage;
