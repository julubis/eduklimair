import jwtDecode from 'jwt-decode';

const nav2 = document.getElementById('nav2');
const ul2 = document.getElementById('ul2');
const logo = document.getElementById('logo');

const hamburgerButton = document.getElementById('hamburgerButton');

const DrawerInitiator = {
  init() {
    const token = localStorage.getItem('token');
    if (token) {
      const { username } = jwtDecode(token);
      const sign = document.querySelector('#signLogInOut');
      const sign2 = document.querySelector('#signLogInOut2');
      sign.classList.add('listUser');
      sign.innerHTML = `${username}
      <div class="tampunganDropDown">
      <ul id="dropDownUser" class="dropdown-item">
        <li class="listItemArticles"><a href="#/profile">Profile</a></li>
        ${username === 'admin' ? '<li class="listItemArticles"><a href="#/admin">Dashboard</a></li>' : ''}
        <li class="listItemArticles"><a href="#/signout">Sign out</a></li>
      </ul>`;
      sign2.classList.add('listItemArticles2', 'dropdown');
      sign2.innerHTML = username;
      ul2.innerHTML += `
      <ul class="dropDownArticle2 dropdown-item">
        <li><a href="#/profile">Profile</a></li>
        ${username === 'admin' ? '<li><a href="#/admin">Dashboard</a></li>' : ''}
        <li><a href="#/signout">Sign out</a></li>
      </ul>
      </div>`;
    }

    const dropdowns = document.querySelectorAll('.dropdown');
    // dropdown toggle
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.nextElementSibling.classList.toggle('open');
      });
    });
    // open navbar
    hamburgerButton.addEventListener('click', (e) => {
      e.stopPropagation();
      nav2.style.left = '50%';
    });
    // close navbar
    window.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target !== nav2) {
        nav2.style.left = '100%';
      }
    });
    // hide dropdown
    logo.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.dropdown-item').forEach((item) => {
        item.classList.remove('open');
      });
    });
  },
};

export default DrawerInitiator;
