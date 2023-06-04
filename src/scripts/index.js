import 'regenerator-runtime';
import '../styles/header.sass';
import '../styles/responsive.sass';
import '../styles/mainHome1.sass';
import '../styles/footer.sass';
import '../styles/signUp.sass';
import '../styles/aboutUs.sass';
import '../styles/admin.sass';
// import './utils/tombolLatest';
import App from './views/app';

const app = new App({ content: document.querySelector('main') });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
