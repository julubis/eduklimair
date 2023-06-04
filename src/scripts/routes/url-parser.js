import routes from './router';

const params = () => {
  const param = []; // [0] => category, [1] => id
  const url = window.location.hash.slice(1).toLowerCase();
  for (let i = 0; i < routes.length; i += 1) {
    const { path } = routes[i];
    const match = url.match(path);
    if (match) {
      match.slice(1).forEach((par) => {
        param.push(par);
      });
    }
  }
};

const page = () => {
  let content = { async render() { return 'not found'; }, async afterRender() { return null; } };
  const url = window.location.hash.slice(1).toLowerCase();
  for (let i = 0; i < routes.length; i += 1) {
    const { path, handler } = routes[i];
    const match = url.match(path);
    if (match) {
      content = handler;
    }
  }
  return content;
};

export { page, params };
