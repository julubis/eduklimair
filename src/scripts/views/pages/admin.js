/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import momen from 'moment';
import API_ENDPOINT from '../../globals/api-endpoint';
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
        <div class="comment">
          <picture>
            <img src="image.jpg" alt="">
          </picture>
          <div class="comment-content">
            <h5>Julkarnain</h5>
            <h6>2 jam yang lalu</h6>
            <p>Mantap gan!</p>
            <div class="action" data-state="">
              <span class="like" data-value="0">
                <button type="button" aria-label="Like" data-id="abc" class="like-btn">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                </svg>
                </button>
                <p>0</p>
              </span>
              <span class="dislike" data-value="0">
                <button type="button" aria-label="Dislike" data-id="abc" class="dislike-btn">
                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
                  </svg>
                </button>
                <p>0</p>
              </span>
              <button class="reply" data-id="abc" data-username="jul">Balas</button>
              <button class="show-reply" data-id="abc">Lihat balasan</button>
            </div>
          </div>
        </div>
        <div class="replies hidden" data-id="abc">
          <div class="comment">
            <picture>
              <img src="image.jpg" alt="">
            </picture>
            <div class="comment-content">
              <h5>Julkarnain</h5>
              <h6>2 jam yang lalu</h6>
              <p>Mantap gan!</p>
              <div class="action">
                <button>0 <i class="bi bi-hand-thumbs-up"></i></button>
                <button>0 <i class="bi bi-hand-thumbs-down"></i></button>
                <button class="reply" data-id="bca" data-username="jali">Balas</button>
              </div>
            </div>
          </div>
        </div>

        <div class="comment">
          <picture>
            <img src="image.jpg" alt="">
          </picture>
          <div class="comment-content">
            <h5>Julkarnain</h5>
            <h6>2 jam yang lalu</h6>
            <p>Mantap gan!</p>
            <div class="action">
              <button>0 <i class="bi bi-hand-thumbs-up"></i></button>
              <button>0 <i class="bi bi-hand-thumbs-down"></i></button>
              <button class="reply" data-id="bca" data-username="jali">Balas</button>
              <button class="show-reply" data-id="bca">Lihat balasan</button>
            </div>
          </div>
        </div>
        <div class="replies hidden" data-id="bca">
          
        </div>
      </div>
    </div>
  </div>
  `;

  document.querySelectorAll('like-btn').forEach((likeBtn) => {
    // const {id} = likeBtn.dataset
    // likeBtn.addEventListener('click', e => {
    //   e.stopPropagation()

    // })
  });

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

async function newArticle() {
  const container = document.querySelector('.admin .container');
  container.innerHTML = `
  <div class="new-article">
    <h2>Artikel Baru</h2>
    <form id="add-article">
      <div class="action">
        <button type="submit">Simpan</button>
        <button id="cancel-btn">Batal</button>
      </div>
      <input type="text" name="title" placeholder="Judul Artikel" required>
      <div class="radio">
        <div class="select">
          <input checked id="radio-water" type="radio" value="water" name="category" required>
          <label for="radio-water">Air</label>
        </div>
        <div class="select">
          <input id="radio-climate" type="radio" value="climate" name="category" required>
          <label for="radio-climate">Iklim</label>
        </div>
      </div>
      <input type="text" class="source" name="source" placeholder="Sumber Artikel" required>
      <div class="dropzone">
        <label for="dropzone-file">
          <img src="">
          <div>
            <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="">Click to upload or drag and drop image</p>
          </div>
          <input id="dropzone-file" type="file" name="image" accept="image/*" required>
        </label>
      </div>
      <textarea name="content" placeholder="Konten Artikel" required></textarea>
    </form>
  </div>
  `;
  document.querySelector('button#cancel-btn').addEventListener('click', (e) => {
    articleList();
  });
  const imageInput = document.querySelector('input#dropzone-file');
  imageInput.addEventListener('change', () => {
    const [file] = imageInput.files;
    if (file) {
      document.querySelector('.dropzone label div').style.display = 'none';
      const img = document.querySelector('label[for="dropzone-file"] img');
      img.src = URL.createObjectURL(file);
      img.style.display = 'block';
    }
  });
  const toast = document.querySelector('app-toast');
  try {
    const form = document.querySelector('form#add-article');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { error, message } = await Article.add(new FormData(form));
      if (error) {
        toast.danger(message);
        return;
      }
      toast.success('Add article success');
      articleList();
    });
  } catch {
    toast.danger('Fecth error');
  }
}

async function editArticle(id) {
  const container = document.querySelector('.admin .container');
  container.innerHTML = `
  <div class="new-article">
    <h2>Edit Artikel</h2>
    <form id="edit-article">
      <div class="action">
        <button type="submit">Simpan</button>
        <button id="cancel-btn">Batal</button>
      </div>
      <input type="text" name="title" placeholder="Judul Artikel" required>
      <div class="radio">
        <div class="select">
          <input checked id="radio-water" type="radio" value="water" name="category" required>
          <label for="radio-water">Air</label>
        </div>
        <div class="select">
          <input id="radio-climate" type="radio" value="climate" name="category" required>
          <label for="radio-climate">Iklim</label>
        </div>
      </div>
      <input type="text" class="source" name="source" placeholder="Sumber Artikel" required>
      <div class="dropzone">
        <label for="dropzone-file">
          <img src="">
          <input id="dropzone-file" type="file" name="image" accept="image/*" required>
        </label>
      </div>
      <textarea name="content" placeholder="Konten Artikel" required></textarea>
    </form>
    <button id="delete-btn">Hapus Artikel</button>
  </div>
  `;

  const toast = document.querySelector('app-toast');
  try {
    const { data } = await Article.detail(id);
    const { article } = data;
    container.innerHTML = `
    <div class="new-article">
      <h2>Edit Artikel</h2>
      <form id="edit-article">
        <div class="action">
          <button type="submit">Simpan</button>
          <button id="cancel-btn">Batal</button>
        </div>
        <input type="text" name="title" placeholder="Judul Artikel" value="${article.title}" required>
        <div class="radio">
          <div class="select">
            <input ${article.category === 'water' ? 'checked' : ''} id="radio-water" type="radio" value="water" name="category" required>
            <label for="radio-water">Air</label>
          </div>
          <div class="select">
            <input ${article.category === 'water' ? '' : 'checked'} id="radio-climate" type="radio" value="climate" name="category" required>
            <label for="radio-climate">Iklim</label>
          </div>
        </div>
        <input type="text" class="source" name="source" placeholder="Sumber Artikel" value="${article.source}" required>
        <div class="dropzone">
          <label for="dropzone-file">
            <img src="${API_ENDPOINT.IMAGE(article.imageId)}" style="display: block" alt="article image">
            <input id="dropzone-file" type="file" name="image" accept="image/*">
          </label>
        </div>
        <textarea name="content" placeholder="Konten Artikel" required>${article.content}</textarea>
      </form>
      <button id="delete-btn">Hapus Artikel</button>
    </div>`;
    const form = document.querySelector('form#edit-article');
    document.querySelector('button#cancel-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      articleList();
    });
    const imageInput = document.querySelector('input#dropzone-file');
    imageInput.addEventListener('change', () => {
      const [file] = imageInput.files;
      if (file) {
        const img = document.querySelector('label[for="dropzone-file"] img');
        img.src = URL.createObjectURL(file);
      }
    });
    document.querySelector('#delete-btn').addEventListener('click', async (e) => {
      e.stopPropagation();
      const { error, message } = await Article.delete(id);
      if (error) {
        toast.danger(message);
        return;
      }
      toast.success('Delete article success');
      articleList();
    });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', form.elements.title.value);
      formData.append('source', form.elements.source.value);
      formData.append('content', form.elements.content.value);
      formData.append('category', form.elements.category.value);
      if (form.elements.image.files.length > 0) {
        formData.append('image', form.elements.image.files[0]);
      }
      const { error, message } = await Article.update(id, formData);
      if (error) {
        toast.danger(message);
        return;
      }
      toast.success('Edit article success');
      articleList();
    });
  } catch (e) {
    console.log(e);
    toast.danger('Fecth error');
  }
}

async function articleList() {
  const container = document.querySelector('.admin .container');
  container.innerHTML = `
  <div class="action-article">
    <form id="filter-article">
      <select name="category">
        <option value="">Semua</option>
        <option value="water">Air</option>
        <option value="climate">Iklim</option>
      </select>
      <input type="search" name="title" placeholder="Cari judul artikel...">
      <button type="submit">
          <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
    </form>
    <button id="new-article">Tambah</button>
  </div>
  <div class="article-list">
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
  </div>
  `;
  const toast = document.querySelector('app-toast');
  try {
    const { error, data } = await Article.list();
    const { articles } = data;
    const articlesList = document.querySelector('.article-list');
    articlesList.innerHTML = `
    ${articles.map((article) => `
    <article>
      <picture>
        <img src="${API_ENDPOINT.IMAGE_SM(article.imageId)}" alt="Article image">
      </picture>
      <div class="body">
        <div class="content">
          <h3>${article.title}</h3>
          <h4>${momen(article.timestamp).locale('id').format('dddd, DD MMMM YYYY')}</h4>
          <p>${article.content}</p>
          <button id="view-article" data-id="${article.id}">Edit Artikel</button>
        </div>
      </div>
    </article>
    `).join('')}`;
    document.querySelector('button#new-article').addEventListener('click', (e) => {
      newArticle();
    });
    document.querySelectorAll('button#view-article').forEach((button) => {
      const { id } = button.dataset;
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        editArticle(id);
      });
    });
    const form = document.querySelector('form#filter-article');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const filter = Object.fromEntries(new FormData(form).entries());
      const articleLists = (await Article.list(filter)).data.articles;
      articlesList.innerHTML = `
      ${articleLists.map((article) => `
      <article>
        <picture>
          <img src="${API_ENDPOINT.IMAGE_SM(article.imageId)}" alt="Article image">
        </picture>
        <div class="body">
          <div class="content">
            <h3>${article.title}</h3>
            <h4>${momen(article.timestamp).locale('id').format('dddd, DD MMMM YYYY')}</h4>
            <p>${article.content}</p>
            <button id="view-article" data-id="${article.id}">Edit Artikel</button>
          </div>
        </div>
      </article>
      `).join('')}`;
      document.querySelector('button#new-article').addEventListener('click', (ev) => {
        ev.stopPropagation();
        newArticle();
      });
      document.querySelectorAll('button#view-article').forEach((button) => {
        const { id } = button.dataset;
        button.addEventListener('click', (ev) => {
          ev.stopPropagation();
          editArticle(id);
        });
      });
    });
  } catch {
    toast.danger('Fetch failed');
  }
}

const Admin = {
  async render() {
    return `
    <div class="admin">
      <div class="container">
      
      </div>
    </div>`;
  },
  async afterRender() {
    articleList();
  },
};

export default Admin;
