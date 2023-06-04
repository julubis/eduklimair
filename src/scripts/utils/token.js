const setToken = (token) => {
  localStorage.setItem('token', token);
  window.location.href = '/';
};

const deleteToken = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

export { setToken, deleteToken };
