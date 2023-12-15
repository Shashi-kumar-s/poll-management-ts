import { APIEnpoint } from "../config/Config";
import { SignupSuccess } from "../features/signup/SignupSlice";

interface RegisterData {
  Email: string;
  Password: string;
  Role: string;
}

export const getRegisterData = async (dispatch: any, values: RegisterData) => {
  try {
    const response = await APIEnpoint.post(
      `add_user?username=${values.Email}&password=${values.Password}&role=${values.Role}`
    );
    console.log(response.data.data, "responseeeeeeeeee");
    dispatch(SignupSuccess(response.data.data));
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
