import Drawer from './drawer-initiator';

const setToken = (token) => {
  localStorage.setItem('token', token);
  Drawer.init();
  window.history.back();
};

const deleteToken = () => {
  localStorage.removeItem('token');
  Drawer.init();
  window.location.href = '#/signin';
};

export { setToken, deleteToken };
