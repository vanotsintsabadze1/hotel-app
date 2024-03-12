import { createContext } from "react";
import { userAuthorizedType } from "../types";

const userLoggedInStatusContext = createContext<userAuthorizedType>({
  isUserLoggedIn: false,
  setUserIsLoggedIn: (_status: boolean) => {},
});

export { userLoggedInStatusContext };
