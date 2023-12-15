import { Field } from "formik";

interface InputFieldPoll {
  type: string;
  placeholder: string;
  name: string;
  autoComplete: string;
  className: string;
}

const InputFieldPoll = (props: InputFieldPoll) => {
  const { type, placeholder, name, autoComplete, className } = props;
  return (
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      autoComplete={autoComplete}
    />
  );
};

export default InputFieldPoll;
