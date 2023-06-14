import '../templates/article-list';
import Article from '../../data/article';

const Articles = {
  async render() {
    return `
    <div class="articles">
    <h2></h2>
    <article-list><article-list>
    <div>
    `;
  },
  async afterRender() {
    let filter = {};
    const title = document.querySelector('.articles > h2');
    const url = window.location.hash.slice(1).toLowerCase();
    const match = url.match(/^\/articles\/(water|climate)$/);
    if (match) {
      filter = { category: match.slice(1)[0] };
      title.textContent = `Artikel ${match.slice(1)[0] === 'water' ? 'Air' : 'Iklim'}`;
    } else {
      title.textContent = 'Artikel Terbaru';
    }
    const { data } = await Article.list(filter);
    document.querySelector('article-list').articles = data.articles;
  },
};
export default Articles;
