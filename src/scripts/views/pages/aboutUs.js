const AboutUs = {
  async render() {
    return `
    <div id="containerAboutUs1">
    <h1>ABOUT US</h1>
    <div class="containerAboutUs2">
      <div class="containerAboutUs3">
        <img class="gambarAboutUs" src="tujuan.svg" width="80%">
      </div>
      <div class="containerAboutUs4">
        <h2>TUJUAN KAMI</h2>
        <article>Alasan kami ingin mengembangkan platform ini adalah untuk mengintegrasi informasi tentang sumber daya air, sanitasi, dan perubahan iklim agar dapat diakses dengan mudah oleh masyarakat yang membutuhkan.</article>
        <article>Platform ini diharapkan mampu menekan angka banyaknya orang yang terdampak krisis air bersih, sanitasi tidak layak, dan perubahan iklim.</article>
      </div>
    </div>
    <div class="containerAboutUs2">
      <div class="containerAboutUs4">
        <h2>MISI KAMI</h2>
        <article>Mengedukasi terkait hal pengelolaan sumber daya air, manajemen sanitasi air yang layak, dan .perubahan klimatologis. </article>
      </div>
      <div class="containerAboutUs3">
        <img class="gambarAboutUs" src="misi.svg" width="80%">
      </div>
    </div>
    <div id="containerAboutUs5">
      <h2 style="text-align: center; margin: 20px auto;">OUR TEAM</h2>
      <div class="containerAboutUs6">
        <div class="containerAboutUs7">
          <img src="jul.jpg" class="gambarProfile" width="50%">
          <h3>Julkarnain</h3>
          <p>Student at Dicoding Academy</p>
          <div class="containerAboutUs8">
            <button class="tombolAboutUs"><img src="instagram.png" width="30px"><a href="https://www.instagram.com/julubis/"></a></button>
            <button class="tombolAboutUs"><img src="linkedin.png" width="30px"><a href="https://www.linkedin.com/in/julkarnain-lubis"></a></button>
            <button class="tombolAboutUs"><img src="github.png" width="30px"><a href="https://github.com/julubis"></a></button>
          </div>
        </div>
        <div class="containerAboutUs7">
          <img src="roby.jpg" class="gambarProfile" width="50%">
          <h3>Robiul Awal</h3>
          <p>Student at Dicoding Academy</p>
          <div class="containerAboutUs8">
            <button class="tombolAboutUs"><img src="instagram.png" width="30px"><a href="https://instagram.com/robbyul_"></a></button>
            <button class="tombolAboutUs"><img src="linkedin.png" width="30px"><a href="https://www.linkedin.com/in/robiul-awal11/"></a></button>
            <button class="tombolAboutUs"><img src="github.png" width="30px"><a href="https://github.com/robbyulawal11"></a></button>
          </div>
        </div>
        <div class="containerAboutUs7">
          <img src="guntur.jpg" class="gambarProfile" width="50%">
          <h3>Nur Rohmat R. G. N.</h3>
          <p>Student at Dicoding Academy</p>
          <div class="containerAboutUs8">
            <button class="tombolAboutUs"><img src="instagram.png" width="30px"><a href="https://instagram.com/nurrachmatguntur?igshid=ZDc4ODBmNjlmNQ"></a></button>
            <button class="tombolAboutUs"><img src="linkedin.png" width="30px"><a href="https://www.linkedin.com/in/nurrahmat-guntur-a99a20277/"></a></button>
            <button class="tombolAboutUs"><img src="github.png" width="30px"><a href="https://github.com/NurrachmatGuntur"></a></button>
          </div>
        </div>
        <div class="containerAboutUs7">
          <img src="rizal.jpg" class="gambarProfile" width="50%">
          <h3>Rizal Abimanyu</h3>
          <p>Student at Dicoding Academy</p>
          <div class="containerAboutUs8">
            <button class="tombolAboutUs"><img src="instagram.png" width="30px"><a href="https://www.instagram.com/rizalabimanyu_202/"></a></button>
            <button class="tombolAboutUs"><img src="linkedin.png" width="30px"><a href="https://www.linkedin.com/in/rizal-abimanyu-6111451a4/"></a></button>
            <button class="tombolAboutUs"><img src="github.png" width="30px"><a href="https://github.com/rizalabimanyu202"></a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
        `;
  },
  async afterRender() {
    return null;
  },
};

export default AboutUs;
