import Home from '../views/pages/home';
import About from '../views/pages/aboutUs';
import SignUp from '../views/pages/signUp';
import SignIn from '../views/pages/signIn';
import SignOut from '../views/pages/signOut';
import Admin from '../views/pages/admin';

const routes = [
  { path: /^\/?$/, handler: Home },
  { path: /^\/signup$/, handler: SignUp },
  { path: /^\/signin$/, handler: SignIn },
  { path: /^\/signout$/, handler: SignOut },
  { path: /^\/admin$/, handler: Admin },
  { path: /^\/about$/, handler: About },
];

// const routes = {

//   '/': Home,
//   '/signin': '',
//   '/signup': SignUp,
//   '/admin': '',
//   '/about': About,
//   '/article/water': '',
//   '/article/climate': '',
//   '/article/:category/:id': '',
// };

export default routes;
