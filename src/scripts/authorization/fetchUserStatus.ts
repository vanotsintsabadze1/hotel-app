const apiAddr = import.meta.env.VITE_API_ADDR;
import { userActivityCheckType } from "../../types";
import axios from "axios";

const fetchUserStatus = async (): Promise<userActivityCheckType> => {
  const response = await axios.get(`${apiAddr}/api/Auth/GetCurrentUser`, { withCredentials: true });
  const data = response.data;
  const status = response.status;
  return { data, status };
};

export { fetchUserStatus };
