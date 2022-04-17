import axios from "axios";
import { API_URL } from "./apiURL";

export async function createCompany(company) {
  const response = await axios({
    url: `${API_URL}/companies`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: company,
  });

  const data = await response.data;
  return data;
}
