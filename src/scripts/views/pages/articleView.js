import '../templates/article-view';
import Article from '../../data/article';

const ArticleView = {
  async render() {
    return '<article-view><article-view>';
  },
  async afterRender() {
    const url = window.location.hash.slice(1).toLowerCase();
    const match = url.match(/^\/articles\/(water|climate)\/([a-z0-9]+)$/);
    const [category, id] = match.slice(1);

    const { data } = await Article.detail(id);
    console.log(data);
    document.querySelector('article-view').article = data.article;
  },
};
export default ArticleView;
