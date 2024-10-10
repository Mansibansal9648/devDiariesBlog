import * as Yup from 'yup';

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address')
    .required('Please enter your email'),
});

export const signUpSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters long')
    .max(25, 'Username must be at most 25 characters long')
    .matches(/^[a-zA-Z0-9_-]+$/, 'Username must contain only alphabetic characters, numbers, underscore, and hyphen')
    .required('Please enter your username'),

  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(25, 'Name must be at most 25 characters long')
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only alphabetic characters and spaces')
    .required('Please enter your name'),

  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address')
    .required('Please enter your email'),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long',
    )
    .required('Please enter your password'),

  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const resetPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long',
    )
    .required('Please enter your new password'),

  confirmPassword: Yup.string()
    .required('Please confirm your new password')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

export const loginSchema = Yup.object({
  username_email: Yup.string()
    .min(3, 'Username/Email must be at least 3 characters long')
    .max(25, 'Username/Email must be at most 25 characters long')
    .required('Please enter your Username/Email'),

  password: Yup.string().required('Please enter your password'),
});

export const updatePasswordSchema = Yup.object({
  currentPassword: Yup.string().required('Current password is required'),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long',
    )
    .required('Please enter your password'),

  confirmPassword: Yup.string()
    .required('Please confirm your new password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
