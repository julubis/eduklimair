import API from '../globals/api-endpoint';

class User {
  static async infoProfile() {
    const options = {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.USER, options);
    return response.json();
  }

  static async favorite() {
    const options = {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.FAVORITE, options);
    return response.json();
  }

  static async changeProfile(data) {
    const options = {
      method: 'PUT',
      body: data,
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.USER, options);
    return response.json();
  }

  static async changePassword(data) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.CHANGE_PASSWORD, options);
    return response.json();
  }
}

export default User;
