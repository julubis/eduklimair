import Drawer from './drawer-initiator';

const setToken = (token) => {
  localStorage.setItem('token', token);
  Drawer.init();
  if (window.history.length > 1) return window.history.back();
  window.location.href = '#';
};

const deleteToken = () => {
  localStorage.removeItem('token');
  Drawer.init();
  window.location.href = '#/signin';
};

export { setToken, deleteToken };
