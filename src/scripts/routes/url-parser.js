import routes from './router';

// console.log(routes.length);
// let params = [];

const page = () => {
  let content = { async render() { return 'not found'; }, async afterRender() { return null; } };
  const url = window.location.hash.slice(1).toLowerCase();
  for (let i = 0; i < routes.length; i += 1) {
    const { path, handler } = routes[i];

    const match = url.match(path);
    if (match) {
      // params = match.slice(1); // [0] => category, [1] => id
      content = handler;
    }
  }
  return content;
};

export default page;
