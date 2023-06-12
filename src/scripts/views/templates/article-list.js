import momen from 'moment';
import API_ENDPOINT from '../../globals/api-endpoint';

class ArticleList extends HTMLElement {
  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="article-list container">
      ${this._articles.map((article) => `
        <article>
          <picture>
            <img src="${API_ENDPOINT.IMAGE_SM(article.imageId)}" alt="Article image">
          </picture>
          <div class="body">
            <div class="content">
              <h3>${article.title}</h3>
              <h4>${momen(article.timestamp).locale('id').format('dddd, DD MMMM YYYY')}</h4>
              <p>${article.content}</p>
            </div>
            <div><a href="#/articles/${article.category}/${article.id}">Read more</a></div>
          </div>
        </article>`).join('')}
    </div>`;
  }
}

customElements.define('article-list', ArticleList);
