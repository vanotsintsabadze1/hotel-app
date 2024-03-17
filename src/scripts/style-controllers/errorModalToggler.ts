const errorModalToggler = (setErrorMessage: (arg: string) => void, errorMessage: string, setShouldErrorBeVisible: (arg: boolean) => void) => {
  setErrorMessage(errorMessage);
  setShouldErrorBeVisible(true);

  setTimeout(() => {
    setShouldErrorBeVisible(false);
  }, 2500);
};

export { errorModalToggler };
