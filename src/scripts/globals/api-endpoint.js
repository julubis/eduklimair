import CONFIG from './config';

const API_ENDPOINT = {
  ARTICLE_LIST: `${CONFIG.BASE_URL}articles`,
  ARTICLE_DETAIL: (articleId) => `${CONFIG.BASE_URL}articles/${articleId}`,
  LIKE_ARTICLE: (articleId) => `${CONFIG.BASE_URL}articles/${articleId}/likes`,

  COMMENT: (articleId) => `${CONFIG.BASE_URL}articles/${articleId}/comments`,
  LIKE_COMMENT: (articleId, commentId) => `${CONFIG.BASE_URL}articles/${articleId}/comments/${commentId}/likes`,
  DISLIKE_COMMENT: (articleId, commentId) => `${CONFIG.BASE_URL}articles/${articleId}/comments/${commentId}/dislikes`,
  REPLY_COMMENT: (articleId, commentId) => `${CONFIG.BASE_URL}articles/${articleId}/comments/${commentId}/replies`,

  SIGN_IN: `${CONFIG.BASE_URL}auth/signin`,
  SIGN_UP: `${CONFIG.BASE_URL}auth/signup`,

  IMAGE: (id) => `${CONFIG.BASE_IMAGE_URL}base/${id}`,
  IMAGE_SM: (id) => `${CONFIG.BASE_IMAGE_URL}small/${id}`,
  IMAGE_LG: (id) => `${CONFIG.BASE_IMAGE_URL}large/${id}`,
  IMAGE_PROFILE: (username) => `${CONFIG.BASE_IMAGE_URL}profile/${username}`,

  USER: `${CONFIG.BASE_URL}users/profile`,
  CHANGE_PASSWORD: `${CONFIG.BASE_URL}users/change-password`,
  FAVORITE: `${CONFIG.BASE_URL}users/favorites`,
};

export default API_ENDPOINT;
