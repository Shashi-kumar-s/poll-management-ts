import { APIEnpoint } from "../config/Config";
import { LoginSuccess } from "../features/login/LoginSlice";

interface GetLoginData {
  Email: string;
  Password: string;
}

export const getLoginData = async (dispatch: any, values: GetLoginData) => {
  try {
    const response = await APIEnpoint.post(
      `login?username=${values.Email}&password=${values.Password}`
    );
    localStorage.setItem("token",response.data.token)
    dispatch(LoginSuccess(response.data.token));
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
