import API from '../globals/api-endpoint';

class Comment {
  static async add(articleId, data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.COMMENT(articleId), options);
    return response.json();
  }

  static async like(articleId, commentId) {
    const options = {
      method: 'POST',
      body: '{}',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.LIKE_COMMENT(articleId, commentId), options);
    return response.json();
  }

  static async dislike(articleId, commentId) {
    const options = {
      method: 'POST',
      body: '{}',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.DISLIKE_COMMENT(articleId, commentId), options);
    return response.json();
  }

  static async reply(articleId, commentId, data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.REPLY_COMMENT(articleId, commentId), options);
    return response.json();
  }
}

export default Comment;
