import { useSelector } from "react-redux";

export const user = useSelector((store) => store.login);
export const result = useSelector((store) => store.search);
