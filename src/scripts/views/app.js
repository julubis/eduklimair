import DrawerInitiator from '../utils/drawer-initiator';
import { page } from '../routes/url-parser';

class App {
  constructor({
    button, drawer, dropdowns, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._dropdowns = dropdowns;

    // this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      dropdowns: this._dropdowns,
      content: this._content,
    });
  }

  async renderPage() {
    // console.log(page);
    const content = page();
    this._content.innerHTML = await content.render();
    await content.afterRender();
  }
}

export default App;
