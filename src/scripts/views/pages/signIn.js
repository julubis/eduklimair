const SignIn = {
  async render() {
    return `
    <div id="containerSignUp1">
        <div id="containerSignUp2">
        <img src="./gambarSignIn.svg" width="100%">
        </div>
        <div id="containerSignUp3">
        <div id="containerSignUp4">
            <form>
            <h1>Sign In</h1>
            <label>Email</label>
            <input class="inputSignUp" type="text">
            <label>Password</label>
            <input class="inputSignUp" type="text">
            <button id="tombolSignUp">Sign Up</button>
            </form>
            <p id="sudahPunyaAkun">Belum Punya Akun? <span><a href="#/signup">Sign Up</a></span></p>
        </div>
    </div>
  </div>
      `;
  },
  async afterRender() {
    return null;
  },
};

export default SignIn;
