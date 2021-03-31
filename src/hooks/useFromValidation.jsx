import { useForm } from 'react-hook-form';
import isEmail from 'validator/es/lib/isEmail';
import isURL from 'validator/es/lib/isURL';

const useFormValidation = () => {
  const { handleSubmit, errors, register, watch } = useForm({ mode: 'onChange' });

  const usernameValidation = register({
    required: 'Username is required',
    minLength: { value: 3, message: 'Username must be at least 3 characters.' },
    maxLength: { value: 20, message: 'Username must be no more than 20 characters long.' },
  });

  const emailValidation = register({
    required: 'Email is required',
    validate: () => isEmail(watch('email')) || `Email is not valid`,
  });

  const urlValidation = register({
    validate: () => isURL(watch('image')) || `Image URL is incorrect`,
  });

  const passwordValidation = register({
    required: 'Password is required',
    minLength: { value: 8, message: 'Password must be at least 8 characters.' },
    maxLength: { value: 40, message: 'Password must be no more than 40 characters long.' },
  });

  const passwordRepeatValidation = register({
    required: 'Password is required',
    validate: (value) => value === watch('password') || 'Passwords must match',
  });

  const agreementSettingsValidation = register({
    required: 'Please accept agreement to continue',
  });

  const articleTitleValidation = register({ required: 'Title is required' });
  const articleDescriptionValidation = register({ required: 'Description is required' });
  const articleTextValidation = register({ required: 'Text is required' });

  return {
    handleSubmit,
    errors,
    usernameValidation,
    emailValidation,
    passwordValidation,
    passwordRepeatValidation,
    agreementSettingsValidation,
    urlValidation,
    articleTitleValidation,
    articleDescriptionValidation,
    articleTextValidation,
  };
};

export default useFormValidation;
