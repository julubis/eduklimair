const AboutUs = {
  async render() {
    return `
    <div id="containerAboutUs1">
    <h1>ABOUT US</h1>
    <div class="containerAboutUs2">
      <div class="containerAboutUs3">
        <img class="gambarAboutUs" src="gambarAboutUs1.svg" width="80%">
      </div>
      <div class="containerAboutUs4">
        <h2>TUJUAN KAMI</h2>
        <article>Alasan kami ingin mengembangkan platform ini adalah untuk mengintegrasi informasi tentang sumber daya air, sanitasi, dan perubahan iklim agar dapat diakses dengan mudah oleh masyarakat yang membutuhkan.</article>
        <article>Platform ini diharapkan mampu menekan angka banyaknya orang yang terdampak krisis air bersih, sanitasi tidak layak, dan perubahan iklim.</article>
      </div>
    </div>
    <div class="containerAboutUs2">
      <div class="containerAboutUs4">
        <h2>VISI KAMI</h2>
        <article>Mengedukasi terkait hal pengelolaan sumber daya air, manajemen sanitasi air yang layak, dan .perubahan klimatologis. </article>
      </div>
      <div class="containerAboutUs3">
        <img class="gambarAboutUs" src="gambarAboutUs2.svg" width="80%">
      </div>
    </div>
    <div id="containerAboutUs5">
      <h2>OUR TEAM</h2>
      <div class="containerAboutUs6">
        <div class="containerAboutUs7">
          <img src="banjir_1.jpg" class="gambarProfile" width="50%">
          <h3>Julkarnain</h3>
          <p>Student at Dicoding Academy</p>
          <div class="containerAboutUs8">
            <button class="tombolAboutUs"><img src="instagram.png" width="30px"></button>
            <button class="tombolAboutUs"><img src="linkedin.png" width="30px"></button>
            <button class="tombolAboutUs"><img src="github.png" width="30px"></button>
          </div>
        </div>
        <div class="containerAboutUs7">
          <img src="banjir_1.jpg" class="gambarProfile" width="50%">
          <h3>Robiul Awal</h3>
          <p>Student at Dicoding Academy</p>
          <div class="containerAboutUs8">
            <button class="tombolAboutUs"><img src="instagram.png" width="30px"></button>
            <button class="tombolAboutUs"><img src="linkedin.png" width="30px"></button>
            <button class="tombolAboutUs"><img src="github.png" width="30px"></button>
          </div>
        </div>
        <div class="containerAboutUs7">
          <img src="banjir_1.jpg" class="gambarProfile" width="50%">
          <h3>Nur Rohmat R. G. N.</h3>
          <p>Student at Dicoding Academy</p>
          <div class="containerAboutUs8">
            <button class="tombolAboutUs"><img src="instagram.png" width="30px"></button>
            <button class="tombolAboutUs"><img src="linkedin.png" width="30px"></button>
            <button class="tombolAboutUs"><img src="github.png" width="30px"></button>
          </div>
        </div>
        <div class="containerAboutUs7">
          <img src="banjir_1.jpg" class="gambarProfile" width="50%">
          <h3>Rizal Abimanyu</h3>
          <p>Student at Dicoding Academy</p>
          <div class="containerAboutUs8">
            <button class="tombolAboutUs"><img src="instagram.png" width="30px"></button>
            <button class="tombolAboutUs"><img src="linkedin.png" width="30px"></button>
            <button class="tombolAboutUs"><img src="github.png" width="30px"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
        `;
  },
};

export default AboutUs;
