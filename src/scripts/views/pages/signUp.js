const SignUp = {
  async render() {
    return `
    <div id="containerSignUp1">
      <div id="containerSignUp2">
        <img src="./gambarSignUp.svg" width="100%">
      </div>
      <div id="containerSignUp3">
        <div id="containerSignUp4">
          <form>
            <h1>Sign Up</h1>
            <label>Nama</label>
            <input class="inputSignUp" type="text">
            <label>Username</label>
            <input class="inputSignUp" type="text">
            <label>Email</label>
            <input class="inputSignUp" type="text">
            <label>Password</label>
            <input class="inputSignUp" type="text">
            <label></label>
            <label></label>
            <button id="tombolSignUp">Sign Up</button>
            <p id="sudahPunyaAkun">Sudah Punya Akun? <span><a href="#/signin">Sign In</a></span></p>
          </form>
        </div>
      </div>
    </div>
      `;
  },
  async afterRender() {
    return null;
  },
};

export default SignUp;
