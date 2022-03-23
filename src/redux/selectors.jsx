import { useSelector } from "react-redux";

export function user() {
  return useSelector((state) => state.login);
}

export function search() {
  return useSelector((state) => state.search.result);
}
