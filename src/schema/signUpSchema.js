import * as Yup from 'yup';

const signUpSchema = Yup.object({
  username: Yup.string()
    .min(3, 'username must be atleast 3 characters long')
    .max(25, 'username must be atmost 25 characters long')
    .matches(
      // /^[a-zA-Z0-9_-]$/
      /^[a-zA-Z0-9_-]+$/,
      'Username must contain only alphabetic characters, numbers, underscore and hyphen',
    )
    .required('Please enter your username'),

  name: Yup.string()
    .min(3, 'Name must be atleast 3 characters long')
    .max(25, 'Name must be atmost 25 characters long')
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only alphabetic characters and spaces')
    .required('Please enter your name'),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address')
    // .email("Please enter a valid email address")
    .required('Please enter your email'),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long',
    )
    .required('Please enter your password'),

  // password: Yup.string()
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
  //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  //   )
  //   .min(6, "Password must be at least 6 characters")
  //   .required("Please enter your password"),

  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Password should be same'),
});

export default signUpSchema;
