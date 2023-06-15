import jwtDecode from 'jwt-decode';
import API from '../globals/api-endpoint';

const nav2 = document.getElementById('nav2');
const ul2 = document.getElementById('ul2');
const logo = document.getElementById('logo');
const dropDownArticle = document.getElementById('dropDownArticle');
const hamburgerButton = document.getElementById('hamburgerButton');
const listArticle = document.getElementById('listArticle');
const masukAkun = document.getElementById('masukAkun');
const sign = document.getElementById('signLogInOut');
const sign2 = document.getElementById('signLogInOut2');
let m = 0;
const DrawerInitiator = {
  init() {
    const token = localStorage.getItem('token');
    if (token) {
      const { username, name } = jwtDecode(token);
      sign.style.display = 'none';
      sign2.style.display = 'none';
      masukAkun.style.display = 'flex';
      document.getElementById('username').textContent = `Hi, ${name}`;
      document.getElementById('user-img').src = API.IMAGE_PROFILE(username);
      document.getElementById('dropDownUser').innerHTML = `
        <li class="listItemArticles"><a href="#/profile">Profile</a></li>
        ${username === 'admin' ? '<li class="listItemArticles"><a href="#/admin">Dashboard</a></li>' : ''}
        <li class="listItemArticles"><a href="#/signout">Logout</a></li>
      `;
    } else {
      sign.style.display = 'inline-block';
      sign2.style.display = 'inline-block';
      masukAkun.style.display = 'none';
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
      document.querySelector('.dropdown-child').classList.remove('open');
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
    listArticle.addEventListener('click', () => {
      m += 1;
      if (m % 2 === 0) {
        listArticle.innerText = 'Article ▼';
        dropDownArticle.style.display = 'none';
      } else {
        listArticle.innerText = 'Article ▲';
        dropDownArticle.style.display = 'flex';
      }
      console.log(`m= ${m}`);
    });

    // const prevURL = window.history.length > 1 ? window.history[window.history.length - 2] : null;

    console.log(window.history);
  },
};

export default DrawerInitiator;
