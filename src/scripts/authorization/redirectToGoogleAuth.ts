const apiAddr = import.meta.env.VITE_API_ADDR;

const redirectToGoogleAuth = (): void => {
  window.open(`${apiAddr}/api/Auth/GoogleLogin`);
};

export { redirectToGoogleAuth };
