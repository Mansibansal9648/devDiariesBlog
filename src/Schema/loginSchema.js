import * as Yup from 'yup';

export const loginSchema = Yup.object({
  username_email: Yup.string()
    .min(3, 'Username/Email must be atleast 3 characters long')
    .max(25, 'Username/Email must be atmost 25 characters long')
    .required('Please enter Username/Email'),

  password: Yup.string().required('Please enter your password'),
});
