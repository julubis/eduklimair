import momen from 'moment';
import API_ENDPOINT from '../../globals/api-endpoint';

class ArticleList extends HTMLElement {
  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  connectedCallback() {
    this.innerHTML = `<div class="article-list container">
      <article>
        <picture>
          <div class="skeleton"></div>
        </picture>
        <div class="body">
          <div class="content">
            <h3 class="skeleton"></h3>
            <h4 class="skeleton"></h4>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
          </div>
          <div><button class="skeleton"></button></div>
        </div>
      </article>
      <article>
        <picture>
          <div class="skeleton"></div>
        </picture>
        <div class="body">
          <div class="content">
            <h3 class="skeleton"></h3>
            <h4 class="skeleton"></h4>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
          </div>
          <div><button class="skeleton"></button></div>
        </div>
      </article>
    </div>`;
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
              <a href="#/articles/${article.category}/${article.id}">Read more</a>
            </div>
          </div>
        </article>`).join('')}
    </div>`;
  }
}

customElements.define('article-list', ArticleList);
