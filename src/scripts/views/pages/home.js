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
              <button class="tombolLatest2"><img src="./beforeLatest.png" width="50px" height="50px"></button>
              <div id="overflowArticles">
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <p>Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <p>Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <p>Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <p>Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <p>Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
                <div class="container7">
                  <img src="./banjir.jpg" width="200px">
                  <div class="container8">
                    <h3>Banjir</h3>
                    <p>Banjir adalah peristiwa atau keadaan dimana terendamnya...</p>
                    <button id="readmore">Read More</button>
                  </div>
                </div> 
              </div>
              <button class="tombolLatest2"><img src="./nextLatest.png" width="50px" height="50px"></button>
            </div>
            <button class="selengkapnya">Selengkapnya</button>
          </div>
        </div>
    </div>
    `;
  },
  async afterRender() {
    return null;
  },
};

export default Home;
