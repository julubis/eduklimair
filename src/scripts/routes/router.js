import Home from '../views/pages/home';
import About from '../views/pages/aboutUs';
import SignUp from '../views/pages/signUp';
import SignIn from '../views/pages/signIn';
import SignOut from '../views/pages/signOut';
import Admin from '../views/pages/admin';
import Articles from '../views/pages/articles';
import ArticleView from '../views/pages/articleView';

const routes = [
  { path: /^\/?$/, handler: Home },
  { path: /^\/signup\/?$/, handler: SignUp },
  { path: /^\/signin\/?$/, handler: SignIn },
  { path: /^\/signout\/?$/, handler: SignOut },
  { path: /^\/admin\/?$/, handler: Admin },
  { path: /^\/about\/?$/, handler: About },
  { path: /^\/articles\/?$/, handler: Articles },
  { path: /^\/articles\/(water|climate)$/, handler: Articles },
  { path: /^\/articles\/(water|climate)\/([a-z0-9]+)$/, handler: ArticleView },
];
export default routes;
