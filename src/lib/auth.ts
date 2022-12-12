export const logout = () => {
  window.localStorage.removeItem("login");
  window.location.href = "/login";
};
