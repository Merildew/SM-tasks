import axios from "axios";
import { API_URL } from "./apiURL";

export async function signUpUser(user, setError) {
  try {
    const response = await axios({
      url: `${API_URL}/signup`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        login: user.login,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        pass: user.pass,
        checkedPass: user.checkedPass,
      },
    });

    const data = await response.data;
    return data;
  } catch (error) {
    let validationError = await error.response.data;
    validationError = validationError.errors;
    setError(validationError);
    throw new Error(validationError.message);
  }
}
