import Home from '../views/pages/home';
import About from '../views/pages/aboutUs';
import SignUp from '../views/pages/signUp';
import SignIn from '../views/pages/signIn';

const routes = [
  { path: /^\/?$/, handler: Home },
  { path: /^\/signup$/, handler: SignUp },
  { path: /^\/signin$/, handler: SignIn },
  { path: /^\/about$/, handler: About },
];

console.log(routes);

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
