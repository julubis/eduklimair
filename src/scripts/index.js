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
// import './utils/tombolLatest';
import './utils/navigationDrawer';
import './utils/tombolLatest';
import App from './views/app';

const app = new App({ content: document.querySelector('main') });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
