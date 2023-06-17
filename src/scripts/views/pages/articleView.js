import '../templates/article-view';
import '../templates/comment-list';
import Article from '../../data/article';

const initButton = () => {
  // reply comment tag
  // document.querySelectorAll('button.reply').forEach((button) => {
  //   const { id, username } = button.dataset;
  //   button.onclick = (e) => {
  //     e.stopPropagation();
  //     const form = document.querySelector('.comment-post form');
  //     form.dataset.id = id;
  //     form.dataset.username = username;
  //     document.querySelector('span.tag p').textContent = username;
  //     document.querySelector('span.tag').classList.remove('hidden');
  //     document.querySelector('.comment-post textarea').focus();
  //     document.querySelector('button.delete-tag').onclick = (ev) => {
  //       ev.stopPropagation();
  //       form.dataset.id = '';
  //       form.dataset.username = '';
  //       document.querySelector('span.tag').classList.add('hidden');
  //     };
  //   };
  // });

  // show comment reply
  // document.querySelectorAll('button.show-reply').forEach((button) => {
  //   const { id } = button.dataset;
  //   button.onclick = (e) => {
  //     e.stopPropagation();
  //     button.classList.toggle('open');
  //     document.querySelector(`div.replies[data-id="${id}"]`).classList.toggle('hidden');
  //     if (button.classList.contains('open')) {
  //       button.textContent = 'Sembunyikan balasan';
  //     } else {
  //       button.textContent = 'Lihat balasan';
  //     }
  //   };
  // });

  // set state to all comment (liked, disliked, or neutral)
  // document.querySelectorAll('.comment-content .action').forEach(action => {

  // })

  // add event to comment action (like and dislike)
};

const ArticleView = {
  async render() {
    return `
    <div class="article-view container">
      <article-view></article-view>
      <comment-list></comment-list>
    </div>`;
  },
  async afterRender() {
    if (!localStorage.getItem('token')) {
      window.location.href = '#/signin';
      return;
    }
    const toast = document.querySelector('app-toast');
    const url = window.location.hash.slice(1).toLowerCase();
    const match = url.match(/^\/articles\/(water|climate)\/([a-z0-9]+)$/);
    const articleId = match.slice(1)[1];

    try {
      const { data } = await Article.detail(articleId);
      const { article } = data;
      const { comments } = article;
      document.querySelector('article-view').article = article;
      document.querySelector('comment-list').comments = comments;
    } catch (e) {
      console.log(e);
      toast.danger('Fecth failed');
    }
  },
};
export default ArticleView;
