import momen from 'moment';
import API_ENDPOINT from '../../globals/api-endpoint';

class ArticleList extends HTMLElement {
  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  render() {
    this.innerHTML = `${this._articles.map((article) => `
    <div class="containerArtikel">
      <div class="containerImg">
        <img src="${API_ENDPOINT.IMAGE_SM(article.imageId)}" alt="">
      </div>
      <div class="containerContent">
        <div class="artikel">
          <h2>${article.title}</h2>
          <h6>${momen(article.timestamp).locale('id').format('dddd, DD MMMM YYYY')}</h6>
          <p>${article.content}</p>
        </div>
        <div><a href="#/articles/${article.category}/${article.id}">Read more</a></div>
      </div>
    </div>
    `).join('')}`;
  }
}

customElements.define('article-list', ArticleList);
