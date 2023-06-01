import 'regenerator-runtime';
import '../styles/header.sass';
import '../styles/responsive.sass';
import '../styles/mainHome1.sass';
import '../styles/footer.sass';
import '../styles/signUp.sass';
import '../styles/aboutUs.sass';
import './utils/navigationDrawer';
// import './utils/tombolLatest';
import App from './views/app';

const app = new App({
  button: document.querySelector('#navbar-btn'),
  drawer: document.querySelector('#navbar-default'),
  dropdowns: document.querySelectorAll('.dropdown'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
