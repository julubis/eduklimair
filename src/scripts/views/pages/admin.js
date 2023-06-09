import '../templates/article-list';
import Article from '../../data/article';

const articleView = () => {
  document.querySelector('.admin .container').innerHTML = `
  <div class="article-view">
    <article>
      <h2>Cara Mengatasi Perubahan Iklim, Kenali Penyebabnya</h2>
      <p>Rabu, 23 Mei 2023</p>
      <div class="action-post">
        <button>sukai postingan <i class="bi bi-heart"></i></button>
        <button>bagikan <i class="bi bi-share"></i></button>
      </div>
      <picture>
        <img src="banjir.jpg" alt="">
      </picture>
      <div class="article">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt non est dolorum nisi laboriosam qui ut quam quod, impedit rerum animi unde aut autem cum at harum provident saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere vero architecto exercitationem cupiditate eum facilis beatae sint totam vel quam, explicabo adipisci, nulla molestiae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero est velit unde temporibus qui pariatur optio. Blanditiis doloribus exercitationem harum optio unde. Laboriosam expedita eveniet rem accusantium, facere at numquam quisquam aperiam voluptatem sequi ex cum! Repudiandae obcaecati ex neque.</p>
      </div>
    </article>
    <div class="comment-container">
      <hr>
      <div class="comment-post">
        <h6>Komentar</h6>
        <form>
          <textarea name="" id="" placeholder="Tulis komentar anda..."></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <div class="comment-list">
        <div class="comment">
          <div class="imgComment">
            <img src="image.jpg" alt="">
          </div>
          <div class="comment-content">
            <h5>Julkarnain</h5>
            <h6>2 jam yang lalu</h6>
            <p>Mantap gan!</p>
            <div class="action">
              <button>0 <i class="bi bi-hand-thumbs-up"></i></button>
              <button>0 <i class="bi bi-hand-thumbs-down"></i></button>
              <button>balas</button>
            </div>
          </div>
        </div>

        <div class="commentar">
          <div class="imgComment">
            <img src="image.jpg" alt="">
          </div>
          <div class="contentComment">
            <h5>Julkarnain</h5>
            <h6>2 jam yang lalu</h6>
            <p>Mantap gan!</p>
            <div class="actionCommentar">
              <button>0 <i class="bi bi-hand-thumbs-up"></i></button>
              <button>0 <i class="bi bi-hand-thumbs-down"></i></button>
              <button>balas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

const articleList = () => {
  const container = document.querySelector('.admin .container');
  container.innerHTML = `
  <div class="article-list">
    <article>
      <picture>
        <img src="banjir.jpg" alt="">
      </picture>
      <div class="body">
        <div class="content">
          <h3>Cara Mengatasi Perubahan Iklim, Kenali Penyebabnya</h3>
          <h4>Rabu, 23 Mei 2023</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste labore sequi eaque dolor esse vero vel earum dolore illo reiciendis neque, minima mollitia nisi nam porro dolores sunt quaerat corrupti in fugit! Quis est architecto quam molestiae totam, enim officiis harum asperiores quaerat cumque quisquam rerum, provident dignissimos consequatur!</p>
        </div>
        <div><button id="view-article">Read more</button></div>
      </div>
    </article>
  </div>
  `;
  document.querySelector('button#view-article').onclick = articleView;
};

const Admin = {
  async render() {
    return `
    <div class="admin">
      <div class="container">
      
      </div>
    </div>`;
  },
  async afterRender() {
    // const articleList = document.querySelector('article-list');
    // const { data } = await Article.list();
    // console.log(data);
    // articleList.articles = data.articles;
    articleList();
    // articleView();
  },
};

export default Admin;
