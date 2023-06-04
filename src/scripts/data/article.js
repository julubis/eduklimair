import API from '../globals/api-endpoint';

class Article {
  static async list({ title, category }) {
    const response = await fetch(`${API.ARTICLE_LIST}${new URLSearchParams({ title, category })}`);
    return response.json();
  }

  static async detail(id) {
    const options = {
      headers: {
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.ARTICLE_DETAIL(id), options);
    return response.json();
  }

  static async add(data) {
    const options = {
      method: 'POST',
      body: data,
      headers: {
        Authentication: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await fetch(API.ARTICLE_LIST, options);
    return response.json();
  }

  static async update(id, data) {
    const options = {
      method: 'PUT',
      body: data,
      headers: {
        Authentication: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await fetch(API.ARTICLE_DETAIL(id), options);
    return response.json();
  }

  static async delete(id) {
    const options = {
      method: 'DELETE',
      headers: {
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.ARTICLE_DETAIL(id), options);
    return response.json();
  }

  static async like(id) {
    const options = {
      method: 'POST',
      headers: {
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await fetch(API.ARTICLE_DETAIL(id), options);
    return response.json();
  }
}

export default Article;
