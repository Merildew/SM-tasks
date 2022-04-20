import axios from "axios";
import { API_URL } from "./apiURL";

export async function updateCompany(company) {
  const response = await axios({
    url: `${API_URL}/companies`,
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    data: company,
  });

  const data = await response.data;
  return data;
}
