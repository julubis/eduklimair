import momen from 'moment';
import API_ENDPOINT from '../../globals/api-endpoint';
import Article from '../../data/article';

class ArticleView extends HTMLElement {
  set article(article) {
    this._article = article;
    this.render();
  }

  connectedCallback() {
    this.innerHTML = `
      <article>
        <h2 class="skeleton"></h2>
        <p class="skeleton"></p>
        <div class="action-post">
          <button class="skeleton"></button>
          <button class="skeleton"></button>
        </div>
        <picture>
          <div class="skeleton"></div>
        </picture>
        <div class="article">
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
        </div>
      </article>
      <div class="comment-container">
        <hr>
        <div class="comment-post">
          <h6 class="skeleton"></h6>
          <form data-id="" data-username="">
            <div class="skeleton"></div>
            <div class="skeleton"></div>
          </form>
        </div>
      </div>`;
  }

  render() {
    this.innerHTML = `
      <article id="article" data-articleid="${this._article.id}">
        <h2>${this._article.title}</h2>
        <p>${momen(this._article.timestamp).locale('id').format('dddd, DD MMMM YYYY')}</p>
        <div class="action-post">
          <button class="like-article${this._article.isLiked ? ' active' : ''}" data-articleid="${this._article.id}">
            Sukai Postingan (${this._article.like})
            <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
            </svg>
          </button>
          <button class="share-article">
            Bagikan
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path>
            </svg>
          </button>
        </div>
        <picture>
          <img src="${API_ENDPOINT.IMAGE(this._article.imageId)}" alt="Article image">
        </picture>
        <div class="article">
          <p>Sumber: <cite><a href="${this._article.source}" target="_blank">${this._article.source}</a></cite></p>
          <p>${this._article.content}</p>
        </div>
      </article>`;

    const toast = document.querySelector('app-toast');
    const likeButton = document.querySelector('button.like-article');
    const shareButton = document.querySelector('button.share-article');
    // like button event
    likeButton.onclick = (e) => {
      e.stopPropagation();
      if (this._article.isLiked) {
        this._article.like -= 1;
        this._article.isLiked = false;
      } else {
        this._article.like += 1;
        this._article.isLiked = true;
      }
      likeButton.innerHTML = `
        Sukai Postingan (${this._article.like})
        <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
        </svg>
      `;
      likeButton.classList.toggle('active');
      Article.like(this._article.id)
    };
    // share button event
    shareButton.onclick = (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success('Tautan artikel berhasil disalin'))
        .catch(() => toast.danger('Tautan artikel gagal disalin'));
    };

  }
}

customElements.define('article-view', ArticleView);
