import { deleteToken } from '../../utils/token';

const SignOut = {
  async render() {
    return '';
  },
  async afterRender() {
    window.location.href = '#';
    deleteToken();
  },
};
export default SignOut;
