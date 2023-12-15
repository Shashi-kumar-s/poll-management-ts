import * as Yup from "yup"

const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

export const SignupSchema = Yup.object().shape({
  Email:Yup.string().email("Please enter valid email.").required(),
  Password:Yup.string().trim().min(6).required().matches(passwordregex,{message:"Atleast 1 capital, small and 1 numeric value."}),
  Role:Yup.string().required()
});