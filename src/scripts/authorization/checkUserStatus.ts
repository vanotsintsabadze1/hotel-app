const checkUserStatus = async (): Promise<boolean> => {
  if (localStorage.getItem("user") !== null) {
    return true;
  } else {
    return false;
  }
};

export { checkUserStatus };
