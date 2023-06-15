import Auth from '../../data/auth';
import { setToken } from '../../utils/token';

const SignIn = {
  async render() {
    if (localStorage.getItem('token')) {
      window.history.back();
    }
    return `
    <div id="containerSignUp1">
      <div id="containerSignUp2">
        <img src="./gambarSignIn.svg" width="85%">
      </div>
      <div id="containerSignUp3">
        <div id="containerSignUp4">
          <form id="signInForm">
            <h1>Sign In</h1>
            <label for="email">Email</label>
            <input class="inputSignUp" id="email" type="email" name="email" autocomplete="email" required>
            <label for="password">Password</label>
            <input class="inputSignUp" id="password" type="password" name="password" autocomplete="current-password" required>
            <button id="tombolSignUp" type="submit">Sign In</button>
            <p id="sudahPunyaAkun">Belum Punya Akun?<a href="#/signup">Sign Up</a></p>
          </form>
        </div>
      </div>
    </div>
      `;
  },
  async afterRender() {
    const toast = document.querySelector('app-toast');
    const form = document.querySelector('form#signInForm');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const { email, password } = Object.fromEntries(new FormData(form).entries());
      const button = document.querySelector('button#tombolSignUp');
      try {
        button.innerText = 'Sign In ...';
        button.disabled = true;
        const { error, data, message } = await Auth.signin({ email, password });
        if (error) {
          button.innerText = 'Sign In';
          button.disabled = false;
          toast.danger(message);
          return;
        }
        const { token } = data;
        button.innerText = 'Sign In';
        button.disabled = false;
        setToken(token);
      } catch (e) {
        button.innerText = 'Sign In';
        button.disabled = false;
        toast.danger('Fetch failed');
      }
    });
  },
};

export default SignIn;
