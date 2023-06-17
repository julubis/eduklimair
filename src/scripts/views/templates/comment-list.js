/* eslint-disable no-param-reassign */
import momen from 'moment';
import API_ENDPOINT from '../../globals/api-endpoint';
import Comment from '../../data/comment';

class CommentList extends HTMLElement {
  set comments(comments) {
    this._comments = comments;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="comment-container">
      <hr>
      <div class="comment-post">
        <h6>Komentar</h6>
        <form data-id="" data-username="" id="send-comment">
          <span class="tag hidden">
            <p>Default</p>
            <button type="button" aria-label="Remove" class="delete-tag">
              <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </span>
          <textarea id="search" name="text" placeholder="Tulis komentar anda..." required></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <div class="comment-list">
        ${this._comments.map((comment) => `
          <div class="comment">
            <picture>
              <img src="${API_ENDPOINT.IMAGE_PROFILE(comment.username)}" alt="Profile image">
            </picture>
            <div class="comment-content">
              <h5>${comment.username}</h5>
              <h6>${momen(comment.timestamp).locale('id').fromNow()}</h6>
              <p>${comment.text}</p>
              <div class="action" data-id="${comment.id}" data-state="${comment.state}">
                <span class="like">
                  <button type="button" aria-label="Like" data-id="${comment.id}" class="like-btn${comment.state === 'liked' ? ' active' : ''}">
                  <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                  </svg>
                  </button>
                  <p class="like-value" data-id="${comment.id}">${comment.like}</p>
                </span>
                <span class="dislike">
                  <button type="button" aria-label="Dislike" data-id="${comment.id}" class="dislike-btn${comment.state === 'disliked' ? ' active' : ''}">
                    <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
                    </svg>
                  </button>
                  <p class="dislike-value" data-id="${comment.id}">${comment.dislike}</p>
                </span>
                <button class="reply" data-id="${comment.id}" data-username="${comment.username}">Balas</button>
                ${comment.replies.length > 0 ? `<button class="show-reply" data-id="${comment.id}">Lihat balasan</button>` : ''}
              </div>
            </div>
          </div>
          <div class="replies hidden" data-id="${comment.id}">
            ${comment.replies.map((reply) => `
              <div class="comment">
                <picture>
                  <img src="${API_ENDPOINT.IMAGE_PROFILE(reply.username)}" alt="">
                </picture>
                <div class="comment-content">
                  <h5>${reply.username}</h5>
                  <h6>${momen(reply.timestamp).locale('id').fromNow()}</h6>
                  <p><b>${reply.reply}</b> ${reply.text}</p>
                  <div class="action" data-id="${reply.id}">
                    <span class="like" data-value="${reply.like}">
                      <button type="button" aria-label="Like" data-id="${reply.id}" class="like-btn${reply.state === 'liked' ? ' active' : ''}">
                      <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                      </svg>
                      </button>
                      <p class="like-value" data-id="${reply.id}">${reply.like}</p>
                    </span>
                    <span class="dislike">
                      <button type="button" aria-label="Dislike" data-id="${reply.id}" class="dislike-btn${reply.state === 'disliked' ? ' active' : ''}">
                        <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
                        </svg>
                      </button>
                      <p class="dislike-value" data-id="${reply.id}">${reply.dislike}</p>
                    </span>
                    <button class="reply" data-id="${comment.id}" data-username="${reply.username}">Balas</button>
                  </div>
                </div>
              </div>`).join('')}
          </div>`).join('')}
      </div>
    </div>`;
    const toast = document.querySelector('app-toast');
    const form = document.querySelector('form#send-comment');
    const { articleid } = document.getElementById('article').dataset;

    // reply comment tag
    document.querySelectorAll('button.reply').forEach((button) => {
      const { id, username } = button.dataset;
      button.onclick = (e) => {
        e.stopPropagation();
        form.dataset.id = id;
        form.dataset.username = username;
        document.querySelector('span.tag p').textContent = username;
        document.querySelector('span.tag').classList.remove('hidden');
        document.querySelector('.comment-post textarea').focus();
        document.querySelector('button.delete-tag').onclick = (ev) => {
          ev.stopPropagation();
          form.dataset.id = '';
          form.dataset.username = '';
          document.querySelector('span.tag').classList.add('hidden');
        };
      };
    });

    // show comment reply
    document.querySelectorAll('button.show-reply').forEach((button) => {
      const { id } = button.dataset;
      button.onclick = (e) => {
        e.stopPropagation();
        button.classList.toggle('open');
        document.querySelector(`div.replies[data-id="${id}"]`).classList.toggle('hidden');
        if (button.classList.contains('open')) {
          button.textContent = 'Sembunyikan balasan';
        } else {
          button.textContent = 'Lihat balasan';
        }
      };
    });

    // event comment form
    form.onsubmit = async (e) => {
      e.preventDefault();
      const { text } = Object.fromEntries(new FormData(form).entries());
      if (form.dataset.id) {
        const { error, data, message } = await Comment.reply(articleid, form.dataset.id, { text });
        if (error) return toast.danger(message);
        this._comments.forEach((comment, i) => {
          if (comment.id === form.dataset.id) {
            this._comments[i].replies.push(data.comment);
            this.render();
          }
        });
        toast.success('Comment replied');
        return;
      }
      const { error, data, message } = await Comment.add(articleid, { text });
      if (error) return toast.danger(message);
      this._comments.unshift(data.comment);
      this.render();
      toast.success('Comment added');
    };

    // add event to comment action (like and dislike)
    document.querySelectorAll('.like-btn').forEach((likeBtn) => {
      const { id } = likeBtn.dataset;
      likeBtn.onclick = async (e) => {
        e.stopPropagation();
        Comment.like(articleid, id);
        const dislikeBtn = document.querySelector(`.dislike-btn[data-id="${id}"]`);
        if (dislikeBtn.classList.contains('active')) {
          const value = document.querySelector(`p.dislike-value[data-id="${id}"]`);
          dislikeBtn.classList.remove('active');
          value.textContent = `${Number(value.textContent) - 1}`;
        }
        const value = document.querySelector(`p.like-value[data-id="${id}"]`);
        if (likeBtn.classList.toggle('active')) {
          value.textContent = `${Number(value.textContent) + 1}`;
          return;
        }
        value.textContent = `${Number(value.textContent) - 1}`;
      };
    });

    document.querySelectorAll('.dislike-btn').forEach((dislikeBtn) => {
      const { id } = dislikeBtn.dataset;
      dislikeBtn.onclick = async (e) => {
        e.stopPropagation();
        Comment.dislike(articleid, id);
        const likeBtn = document.querySelector(`.like-btn[data-id="${id}"]`);
        if (likeBtn.classList.contains('active')) {
          const value = document.querySelector(`p.like-value[data-id="${id}"]`);
          likeBtn.classList.remove('active');
          value.textContent = `${Number(value.textContent) - 1}`;
        }
        const value = document.querySelector(`p.dislike-value[data-id="${id}"]`);
        if (dislikeBtn.classList.toggle('active')) {
          value.textContent = `${Number(value.textContent) + 1}`;
          return;
        }
        value.textContent = `${Number(value.textContent) - 1}`;
      };
    });
  }
}

customElements.define('comment-list', CommentList);
