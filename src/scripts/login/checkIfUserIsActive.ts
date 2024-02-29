const apiAddr = import.meta.env.VITE_API_ADDR;
import axios from "axios";

const checkIfUserIsActive = async (): Promise<Boolean> => {
  const response = await axios.get(`${apiAddr}/api/Auth/GetCurrentUser`);
  return response.data.id ? true : false;
};

export { checkIfUserIsActive };
