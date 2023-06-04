import API from '../globals/api-endpoint';

class Comment {
  static async add(articleId, data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.COMMENT(articleId), options);
    return response.json();
  }

  static async like(articleId, commentId) {
    const options = {
      method: 'POST',
      body: '{}',
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.LIKE_COMMENT(articleId, commentId), options);
    return response.json();
  }

  static async dislike(articleId, commentId) {
    const options = {
      method: 'POST',
      body: '{}',
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.DISLIKE_COMMENT(articleId, commentId), options);
    return response.json();
  }

  static async reply(articleId, commentId) {
    const options = {
      method: 'POST',
      body: '{}',
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.REPLY_COMMENT(articleId, commentId), options);
    return response.json();
  }
}

export default Comment;
