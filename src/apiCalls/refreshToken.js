import axios from "axios";
import { API_URL } from "./apiURL";

export async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await axios({
      url: `${API_URL}/token`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { refreshToken: refreshToken },
    });
    const accessToken = await response.data;
    localStorage.setItem("accessToken", accessToken);
    return true;
  } catch (error) {
    return false;
  }
}
