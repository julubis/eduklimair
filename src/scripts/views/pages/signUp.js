import Auth from '../../data/auth';

const SignUp = {
  async render() {
    if (localStorage.getItem('token')) {
      window.location.href = '#';
    }
    return `
    <div id="containerSignUp1">
      <div id="containerSignUp2">
        <img src="./gambarSignUp.svg" width="85%">
      </div>
      <div id="containerSignUp3">
        <div id="containerSignUp4">
          <form id="signUpForm">
            <h1>Sign Up</h1>
            <label>Nama</label>
            <input class="inputSignUp" type="text" name="name" required>
            <label>Username</label>
            <input class="inputSignUp" type="text" name="username" pattern="[a-zA-Z0-9]+" required>
            <label>Email</label>
            <input class="inputSignUp" type="email" name="email" required>
            <label>Password</label>
            <input class="inputSignUp" type="password" name="password" required>
            <label></label>
            <label></label>
            <button id="tombolSignUp" type="submit">Sign Up</button>
            <p id="sudahPunyaAkun">Sudah Punya Akun? <span><a href="#/signin">Sign In</a></span></p>
          </form>
        </div>
      </div>
    </div>
      `;
  },
  async afterRender() {
    if (localStorage.getItem('token')) return;
    const toast = document.querySelector('app-toast');
    const form = document.querySelector('form#signUpForm');
    document.querySelector('input[name="username"]').onkeypress = (e) => {
      const { key } = e;
      const regex = /[a-zA-Z0-9]/;
      if (!regex.test(key)) e.preventDefault();
    };
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const dataForm = Object.fromEntries(new FormData(form).entries());
      const button = document.querySelector('button#tombolSignUp');
      try {
        button.innerText = 'Sign Up ...';
        button.disabled = true;
        const { error, message } = await Auth.signup(dataForm);
        if (error) {
          button.innerText = 'Sign Up';
          button.disabled = false;
          toast.danger(message);
          return;
        }
        button.innerText = 'Sign Up';
        button.disabled = false;
        window.location.href = '#/signin';
      } catch (e) {
        button.innerText = 'Sign Up';
        button.disabled = false;
        toast.danger('Fetch failed');
      }
    });
  },
};

export default SignUp;
