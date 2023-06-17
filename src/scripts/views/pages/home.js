import Article from '../../data/article';
import API_ENDPOINT from '../../globals/api-endpoint';

const Home = {
  async render() {
    return `
    <div id="jumbotron">
      <div id="container1">
        <p>Selamat datang di,</p>
        <p id="lain1">Eduklimair.</p>
        <p>Eduklimair hadir untuk mengedukasi anda bagaimana cara mengelola Air yang bersih, Sanitasi yang tidak layak dan Perubahan Iklim di Indonesia.</p>
      </div>
      <div id="container2">
        <img src="./inovation1.svg" width="100%">
      </div>
    </div>
    <div id="emptyArticles">
        <div class="infografis">
          <div class="container3">
            <h2>Kelangkaan Air Bersih</h2>
              <div class="container5">
                <h3>PENGERTIAN</h3>
                <p>Penjelasan terkait Kelangkaan air bersih</p>
              </div>
              <div class="container5">
                <h3>PERMASALAHAN</h3>
                <p>Penjelasan terkait Kelangkaan air bersih</p>
              </div>
              <div class="container5">
                <h3>INOVASI</h3>
                <p>Penjelasan terkait Kelangkaan air bersih</p>
              </div>
          </div>
          <div class="container4">
              <img src="./inovation2.svg" width="70%">
          </div>
        </div>
        <div class="infografis">
          <div class="container4">
            <img src="./inovation3.svg" width="55%">
          </div>
          <div class="container3">
            <h2>Sanitasi Yang Tidak Layak</h2>
            <div class="container5">
              <h3>PENGERTIAN</h3>
              <p>Penjelasan terkait Sanitasi yang tidak layak</p>
            </div>
            <div class="container5">
              <h3>PERMASALAHAN</h3>
              <p>Penjelasan terkait Sanitasi yang tidak layak</p>
            </div>
            <div class="container5">
              <h3>INOVASI</h3>
              <p>Penjelasan terkait Sanitasi yang tidak layak</p>
            </div>
          </div>
        </div>
        <div class="infografis">
          <div class="container3">
            <h2>Perubahan Iklim Di Indonesia</h2>
            <div class="container5">
              <h3>PENGERTIAN</h3>
              <p>Penjelasan terkait Perubahan iklim di Indonesia</p>
            </div>
            <div class="container5">
              <h3>PERMASALAHAN</h3>
              <p>Penjelasan terkait Perubahan iklim di Indonesia</p>
            </div>
            <div class="container5">
              <h3>INOVASI</h3>
              <p>Penjelasan terkait Perubahan iklim di Indonesia</p>
            </div>
          </div>
          <div class="container4">
            <img src="./inovation4.svg" width="70%">
          </div>
        </div>
        <div id="infografisLatest1">
          <div id="infografisLatest2">
            <h2>Dive into out latest articles and blog posts</h2>
            <div id="lain2">
              <button id="btn-back" class="tombolLatest2"><img src="./beforeLatest.png" width="50px" height="50px"></button>
              <div id="overflowArticles">
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <div style="overflow: hidden; height: 65px; margin-bottom: 8px;">
                      <p>Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    </div>
                    <a id="readmore" href="#">Read More</a>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <div style="overflow: hidden; height: 65px">
                      <p>Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    </div>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <div style="overflow: hidden; height: 65px">
                      <p>Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    </div>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <div style="overflow: hidden; height: 65px">
                      <p>Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    </div>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <div style="overflow: hidden; height: 65px">
                      <p>Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    </div>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <div style="overflow: hidden; height: 65px">
                      <p>Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    </div>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <div style="overflow: hidden; height: 65px">
                      <p>Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    </div>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <div style="overflow: hidden; height: 65px">
                      <p>Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya... Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    </div>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
              </div>
              <button id="btn-next" class="tombolLatest2"><img src="./nextLatest.png" width="50px" height="50px"></button>
            </div>
            <a class="selengkapnya" href="#/articles">Selengkapnya</a>
          </div>
        </div>
    </div>
    `;
  },
  async afterRender() {
    const templates = (articles) => {
      document.getElementById('overflowArticles').innerHTML = `
        ${articles.map((article) => `
          <div class="container7">
            <img src="${API_ENDPOINT.IMAGE_SM(article.imageId)}" width="200px" height="150px" style="object-fit: cover;">
            <div class="container8">
              <div style="overflow: hidden; height: 45px; margin-bottom: 8px;">
                <h3>${article.title}</h3>
              </div>
              <div style="overflow: hidden; height: 65px; margin-bottom: 5px; margin: 0px 0px 23px">
                <p>${article.content}...</p>
              </div>
              <a id="readmore" href="#/articles/${article.category}/${article.id}">Read More</a>
            </div>
          </div> 
        `).join('')}
      `;
    };
    try {
      let page = 0;
      const { articles } = (await Article.list()).data;
      templates(articles.slice(page * 4, (page + 1) * 4));

      document.getElementById('btn-back').addEventListener('click', (e) => {
        e.stopPropagation();
        if (page > 0) {
          page -= 1;
          const articleSlice = articles.slice(page * 4, (page + 1) * 4);
          if (articleSlice.length > 0) templates(articleSlice);
        }
      });
      document.getElementById('btn-next').addEventListener('click', (e) => {
        e.stopPropagation();
        const articleSlice = articles.slice((page + 1) * 4, (page + 2) * 4);
        if (articleSlice.length > 0) {
          templates(articleSlice);
          page += 1;
        }
      });
    } catch (e) {
      console.error(e);
    }
  },
};

export default Home;
