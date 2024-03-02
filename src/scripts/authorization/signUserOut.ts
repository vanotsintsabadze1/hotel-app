const apiAddr = import.meta.env.VITE_API_ADDR;
import axios from "axios";

const signUserOut = async () => {
  await axios.get(`${apiAddr}/api/Auth/SignOut`, { withCredentials: true });
  localStorage.getItem("user") !== null ? localStorage.removeItem("user") : null;
};

export { signUserOut };
