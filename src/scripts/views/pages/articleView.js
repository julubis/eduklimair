/* eslint-disable no-param-reassign */
import '../templates/article-view';
import Article from '../../data/article';
import Comment from '../../data/comment';

const initButton = () => {
  // reply comment tag
  document.querySelectorAll('button.reply').forEach((button) => {
    const { id, username } = button.dataset;
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const form = document.querySelector('.comment-post form');
      form.dataset.id = id;
      form.dataset.username = username;
      document.querySelector('span.tag p').textContent = username;
      document.querySelector('span.tag').classList.remove('hidden');
      document.querySelector('.comment-post textarea').focus();
      document.querySelector('button.delete-tag').addEventListener('click', (ev) => {
        ev.stopPropagation();
        form.dataset.id = '';
        form.dataset.username = '';
        document.querySelector('span.tag').classList.add('hidden');
      });
    });
  });

  // show comment reply
  document.querySelectorAll('button.show-reply').forEach((button) => {
    const { id } = button.dataset;
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      button.classList.toggle('open');
      document.querySelector(`div.replies[data-id="${id}"]`).classList.toggle('hidden');
      if (button.classList.contains('open')) {
        button.textContent = 'Sembunyikan balasan';
      } else {
        button.textContent = 'Lihat balasan';
      }
    });
  });
};

const ArticleView = {
  async render() {
    return '<article-view><article-view>';
  },
  async afterRender() {
    const toast = document.querySelector('app-toast');
    const url = window.location.hash.slice(1).toLowerCase();
    const match = url.match(/^\/articles\/(water|climate)\/([a-z0-9]+)$/);
    const articleId = match.slice(1)[1];

    try {
      const { data } = await Article.detail(articleId);
      document.querySelector('article-view').article = data.article;

      initButton();
      const form = document.querySelector('form#send-comment');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const { text } = Object.fromEntries(new FormData(form).entries());
        if (form.dataset.id) {
          const { error, message } = await Comment.reply(articleId, form.dataset.id, { text });
          if (error) {
            toast.danger(message);
          }
          form.reset();
          return;
        }
        const { error, message } = await Comment.add(articleId, { text });
        if (error) return toast.danger(message);
        form.reset();
      });
    } catch (e) {
      console.log(e);
      toast.danger('Fecth failed');
    }
  },
};
export default ArticleView;
