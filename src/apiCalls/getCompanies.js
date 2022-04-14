import axios from "axios";

import { companiesAction } from "../redux/actions/companiesActions";

export function getCompanies() {
  return async (dispatch) => {
    const response = await axios({
      method: "get",
      url: `http://localhost:3001/companies`,
    });
    const data = await response.data;

    dispatch(companiesAction({ companies: data }));
    return data;
  };
}
