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
        <img src="./hero.svg">
      </div>
    </div>
    <div id="emptyArticles">
        <div class="infografis">
          <div class="container3">
            <h2>Kelangkaan Air Bersih</h2>
            <div class="container5">
              <p>Menurut Perserikatan Bangsa Bangsa (PBB) pada 2019 mencatat bahwa 2,2 miliar orang atau seperempat populasi dunia masih kekurangan air minum yang aman dikonsumsi. Sementara itu, 4,2 miliar orang tidak memiliki layanan sanitasi yang aman dan 3 miliar tidak memiliki fasilitas cuci tangan dasar.</p> 

              <p>Adapun menurut laporan Bappenas, ketersediaan air di sebagian besar wilayah Pulau Jawa dan Bali saat ini sudah tergolong langka hingga kritis. Sementara itu, ketersediaan air di Sumatera Selatan, Nusa Tenggara Barat, dan Sulawesi Selatan diproyeksikan akan menjadi langka atau kritis pada tahun 2045. Menurut RPJMN 2020-2024, hanya 6,87 persen rumah tangga yang memiliki akses air minum aman.</p>
              <h3>Jangan Khawatir karena Eduklimair punya solusinya!</h3>
              <p></p>
              <a class="selengkapnya selengkapnya2" href="#/articles/water">Selengkapnya</a>
            </div>
          </div>
          <div class="container4">
              <img src="./air.svg" width="100%">
          </div>
        </div>
        <div class="infografis">
          <div class="container4">
            <img src="./sanitasi.svg" width="100%">
          </div>
          <div class="container3">
            <h2>Sanitasi Yang Tidak Layak</h2>
            <div class="container5">
            <p>Berdasarkan data Perserikatan Bangsa-Bangsa (PBB) pada tahun 2013, tercatat ada sekitar 63 juta penduduk Indonesia yang tidak memiliki toilet dan masih buang air besar (BAB) sembarangan, baik itu di sungai, laut maupun tanah. Pembangunan sanitasi di Indonesia memang relatif masih rendah.</p>

            <p>Sementara itu, salah satu tujuan pembangunan berkelanjutan atau Suistainable Development Goals yang diterbitkan PBB dari 21 Oktober 2015 sebagai ambisi pembangunan bersama hingga tahun 2030 yaitu tujuan air bersih dan sanitasi layak: menjamin akses atas air dan sanitasi untuk semua.</p>
            
            <p>Eduklimair hadir untuk membantu mengatasi masalah sanitasi yang ada serta mewujudkan salah satu tujuan perkembangunan berkelanjutan atau Suistainable Development Goals Dunia tersebut.</p>
            
              <h3>Jangan Khawatir karena Eduklimair punya solusinya!</h3>
              <p></p>
              <a class="selengkapnya selengkapnya2" href="#/articles/climate">Selengkapnya</a>
            </div>
          </div>
        </div>
        <div class="infografis">
          <div class="container3">
            <h2>Perubahan Iklim Di Indonesia</h2>
            <div class="container5">
            <p>Berdasarkan data hasil kajian tim peneliti BRIN, telah terjadi perubahan klimatologis di Indonesia selama 19 tahun yaitu 2001-2019.</p> 

              <p>Hakikatnya perubahan iklim merupakan fenomena pemanasan global yang memberikan dampak negatif pada aktivitas kehidupan masyarakat. Dampak negatif perubahan iklim antara lain kenaikan suhu permukaan air laut, intensitas cuaca ekstrem, perubahan pola curah hujan dan gelombang besar.</p>
              <h3>Jangan Khawatir karena Eduklimair punya solusinya!</h3>
              <p></p>
              <p></p>
              <a class="selengkapnya selengkapnya2" href="#/articles/climate">Selengkapnya</a>
            </div>
          </div>
          <div class="container4">
            <img src="./iklim.svg" width="100%">
          </div>
        </div>
        <div id="infografisLatest1">
          <div id="infografisLatest2">
            <h2 style="text-align: center">Dive into out latest articles and blog posts</h2>
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
