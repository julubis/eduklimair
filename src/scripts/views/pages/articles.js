import '../templates/article-list';
import Article from '../../data/article';

const Articles = {
  async render() {
    return '<article-list><article-list>';
  },
  async afterRender() {
    const { data } = await Article.list();
    document.querySelector('article-list').articles = data.articles;
  },
};
export default Articles;
