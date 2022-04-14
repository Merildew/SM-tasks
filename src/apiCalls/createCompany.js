import axios from "axios";

export async function createCompany(company) {
  const response = await axios({
    url: "http://localhost:3001/companies",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: company,
  });

  const data = await response.data;
  return data;
}
