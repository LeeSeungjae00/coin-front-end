export const getUserName = () => {
  const login = window.localStorage.getItem("login");
  if (login) {
    const payload = JSON.parse(login);
    return payload.id;
  }
  return null;
};
