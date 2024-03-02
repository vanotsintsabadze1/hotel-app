import { fetchUserStatus } from "./fetchUserStatus";

const handleUserStatus = async (): Promise<void> => {
  const localStorage = window.localStorage;
  const dataAfterCheckingAuthorization = await fetchUserStatus();
  const { data, status } = dataAfterCheckingAuthorization;

  if (status === 200) {
    localStorage.setItem("user", JSON.stringify(data));
  } else if (status === 401) {
    if (localStorage.getItem("user") === null) {
      window.location.href = "/";
    } else {
      localStorage.removeItem("user");
      window.location.href = "/";
    }
  }
};

export { handleUserStatus };
