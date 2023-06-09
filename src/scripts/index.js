import 'regenerator-runtime';
import '../styles/header.scss';
import '../styles/responsive.scss';
import '../styles/mainHome1.scss';
import '../styles/footer.scss';
import '../styles/signUp.scss';
import '../styles/aboutUs.scss';
import '../styles/admin.scss';
import '../styles/articles.scss';
import '../styles/articleView.scss';
import '../styles/favorite.scss';
import '../styles/profile.scss';
// import './utils/tombolLatest';
import './utils/navigationDrawer';
import './utils/tombolLatest';
import './views/templates/app-toast';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({ content: document.querySelector('main') });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
