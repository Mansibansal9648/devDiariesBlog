import * as Yup from "yup";

export const forgotSchema = Yup.object({
    email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .required("Please enter your email"),

})