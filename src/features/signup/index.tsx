import { Link } from "react-router-dom";
import InputFieldPoll from "../../components/inputField";
import PollButton from "../../components/pollButton";
import "./style.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { inputFieldSignupData } from "../../staticData/inputFieldData";
import { selectData } from "../../staticData/selectData";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { getRegisterData } from "../../utils/GetResisterData";
import { SignupSchema } from "../../schema/Schema";
import { useDispatch } from "react-redux";

// interface Signup {
//   Email: string;
//   Password: string;
//   Role: string;
// }

const Signup = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ Email: "", Password: "", Role: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(values, "valuessssssssssss");
          getRegisterData(dispatch, values);
          const errorstatus = Number(localStorage.getItem("errorstatus"));
          if (errorstatus === 0) {
            toast.success("Signup success", {
              position: "top-center",
              theme: "colored",
              autoClose: 1000,
            });
          }
          //  else if (errorstatus == 1) {
          //   toast.warn("Account Already Exists!", {
          //     position: "top-center",
          //     theme: "colored",
          //     autoClose: 1000,
          //   });
          // }

          actions.resetForm();
          // localStorage.removeItem("errorstatus");
        }}
      >
        <div className="form-container">
          <h1 className="title">Sign up</h1>
          <ToastContainer />
          <Form className="signup_form">
            <div className="signup-input-group">
              {inputFieldSignupData.map((ele) => {
                return (
                  <div key={ele.id}>
                    <label htmlFor={ele.name}>{ele.name}</label>
                    <InputFieldPoll
                      className={"signup-inputfield"}
                      type={ele.type}
                      placeholder={ele.placeholder}
                      name={ele.name}
                      autoComplete={""}
                    />
                    <p className="error">
                      <ErrorMessage name={ele.name} />
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="signup__select">
              <label htmlFor="role">Role</label>
              <Field as="select" className="select" name="Role">
                <option>-- Select Role --</option>
                {selectData.map((ele) => {
                  return (
                    <option key={ele.id} value={ele.name}>
                      {ele.name}
                    </option>
                  );
                })}
              </Field>
              <p className="error">
                <ErrorMessage name="Role" />
              </p>
            </div>
            <div className="signup-btn">
              <PollButton
                type={"submit"}
                buttonstyle={"sign"}
                value={"Sign up"}
              />
            </div>
          </Form>
          <div className="signup">
            <p>
              I have an account ? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Signup;
