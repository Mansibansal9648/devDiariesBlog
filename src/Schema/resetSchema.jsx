import * as Yup from "yup";

export const ResetSchema = Yup.object ({
    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long"
    )
    .required("Please enter your password"),

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Password should be same"),
})