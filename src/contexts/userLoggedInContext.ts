import { createContext } from "react";
import { userAuthorizedType } from "../types";

const UserLoggedInStatusContext = createContext<userAuthorizedType>({
  isUserLoggedIn: false,
  setUserIsLoggedIn: (_status: boolean) => {},
});

export { UserLoggedInStatusContext };
