import { deleteToken } from '../../utils/token';

const SignOut = {
  async render() {
    return '';
  },
  async afterRender() {
    deleteToken();
  },
};
export default SignOut;
