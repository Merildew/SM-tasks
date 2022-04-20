import axios from "axios";
import { API_URL } from "./apiURL";

export async function getCompanies() {
  const response = await axios({
    method: "get",
    url: `${API_URL}/companies`,
  });
  const data = await response.data;
  return data;
}
