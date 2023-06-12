import momen from 'moment';
import API_ENDPOINT from '../../globals/api-endpoint';

class ArticleView extends HTMLElement {
  set article(article) {
    this._article = article;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="article-view container">
      <article>
        <h2>${this._article.title}</h2>
        <p>${momen(this._article.timestamp).locale('id').format('dddd, DD MMMM YYYY')}</p>
        <div class="action-post">
          <button>sukai postingan <i class="bi bi-heart"></i></button>
          <button>bagikan <i class="bi bi-share"></i></button>
        </div>
        <picture>
          <img src="${API_ENDPOINT.IMAGE(this._article.imageId)}" alt="Article image">
        </picture>
        <div class="article">
          <p>${this._article.content}</p>
        </div>
      </article>
      <div class="comment-container">
        <hr>
        <div class="comment-post">
          <h6>Komentar</h6>
          <form data-id="" data-username="">
            <span class="tag hidden">
              <p>Default</p>
              <button type="button" aria-label="Remove" class="delete-tag">
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </span>
            <textarea id="search" placeholder="Tulis komentar anda..." required></textarea>
            <button type="submit">Kirim</button>
          </form>
        </div>
        <div class="comment-list">
          ${this._article.comments.map((comment) => `
            <div class="comment">
              <picture>
                <img src="${API_ENDPOINT.IMAGE_PROFILE(comment.username)}" alt="Profile image">
              </picture>
              <div class="comment-content">
                <h5>${comment.username}</h5>
                <h6>${comment.timestamp}</h6>
                <p>${comment.text}</p>
                <div class="action" data-state="${comment.state}">
                  <span class="like" data-value="${comment.like}">
                    <button type="button" aria-label="Like" data-id="${comment.id}" class="like-btn">
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                    </svg>
                    </button>
                    <p>0</p>
                  </span>
                  <span class="dislike" data-value="${comment.dislike}">
                    <button type="button" aria-label="Dislike" data-id="${comment.id}" class="dislike-btn">
                      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
                      </svg>
                    </button>
                    <p>0</p>
                  </span>
                  <button class="reply" data-id="${comment.id}" data-username="${comment.username}">Balas</button>
                  <button class="show-reply" data-id="${comment.id}">Lihat balasan</button>
                </div>
              </div>
            </div>
            <div class="replies hidden" data-id="${comment.id}">
            ${comment.replies.forEach((reply) => `
              <div class="comment">
                <picture>
                  <img src="${API_ENDPOINT.IMAGE_PROFILE(reply.username)}" alt="">
                </picture>
                <div class="comment-content">
                  <h5>${reply.username}</h5>
                  <h6>${reply.timestamp}</h6>
                  <p><b>${reply.reply}</b> ${reply.text}</p>
                  <div class="action">
                    <span class="like" data-value="${reply.like}">
                      <button type="button" aria-label="Like" data-id="${reply.id}" class="like-btn">
                      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                      </svg>
                      </button>
                      <p>0</p>
                    </span>
                    <span class="dislike" data-value="${reply.dislike}">
                      <button type="button" aria-label="Dislike" data-id="${reply.id}" class="dislike-btn">
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
                        </svg>
                      </button>
                      <p>0</p>
                    </span>
                    <button class="reply" data-id="${reply.id}" data-username="${reply.username}">Balas</button>
                  </div>
                </div>
              </div>
            `)}
            </div>`).join('')}`;
  }
}

customElements.define('article-view', ArticleView);
