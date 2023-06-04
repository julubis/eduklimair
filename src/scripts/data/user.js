import API from '../globals/api-endpoint';

class User {
  static async infoProfile() {
    const options = {
      headers: {
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.USER, options);
    return response.json();
  }

  static async changeProfile(data) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.USER, options);
    return response.json();
  }

  static async changePassword(data) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.CHANGE_PASSWORD, options);
    return response.json();
  }
}

export default User;
