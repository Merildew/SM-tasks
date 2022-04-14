import axios from "axios";

export async function updateCompany(company) {
  const response = await axios({
    url: "http://localhost:3001/companies",
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: company,
  });

  const data = await response.data;
  return data;
}
