import API from '../globals/api-endpoint';

class Auth {
  static async signup(data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(API.SIGN_UP, options);
    return response.json();
  }

  static async signin(data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(API.SIGN_IN, options);
    return response.json();
  }
}

export default Auth;
