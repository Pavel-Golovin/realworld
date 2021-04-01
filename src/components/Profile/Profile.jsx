import React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Profile.module.scss';
import useFormValidation from '../../hooks/useFromValidation';
import useProfile from './useProfile';

const Profile = () => {
  const {
    handleSubmit,
    errors,
    usernameValidation,
    emailValidation,
    passwordValidation,
    urlValidation,
  } = useFormValidation();
  const [user, error, mutation, onSubmitHandler] = useProfile();

  return !!mutation.data ? ( // eslint-disable-line no-extra-boolean-cast
    <Redirect to="/" />
  ) : (
    <section className={classes.Profile}>
      <form className={classes.Profile__form} onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 className={classes.Profile__title}>Edit Profile</h2>
        <label>
          <p className={classes.Profile__titleField}>Username</p>
          <input
            className={classes.Profile__input}
            type="text"
            name="username"
            placeholder="Username"
            defaultValue={user.username}
            ref={usernameValidation}
          />
          {errors.username && <p className={classes.errorMessage}>{errors.username.message}</p>}
          {error ? <p className={classes.errorMessage}>Username {error.username.join()}</p> : null}
        </label>
        <label>
          <p className={classes.Profile__titleField}>Email address</p>
          <input
            className={classes.Profile__input}
            name="email"
            type="email"
            placeholder="Email address"
            defaultValue={user.email}
            ref={emailValidation}
          />
          {errors.email && <p className={classes.errorMessage}>{errors.email.message}</p>}
          {error ? <p className={classes.errorMessage}>Email {error.email.join()}</p> : null}
        </label>
        <label>
          <p className={classes.Profile__titleField}>New password</p>
          <input
            className={classes.Profile__input}
            name="password"
            type="password"
            placeholder="Password"
            ref={passwordValidation}
          />
          {errors.password && <p className={classes.errorMessage}>{errors.password.message}</p>}
        </label>
        <label>
          <p className={classes.Profile__titleField}>Avatar image (url)</p>
          <input
            className={classes.Profile__input}
            name="image"
            type="url"
            placeholder="Avatar image"
            defaultValue={user.image}
            ref={urlValidation}
          />
          {errors.image && <p className={classes.errorMessage}>{errors.image.message}</p>}
        </label>
        <button className={classes.Profile__submitBtn} type="submit">
          Create
        </button>
      </form>
    </section>
  );
};

export default Profile;
