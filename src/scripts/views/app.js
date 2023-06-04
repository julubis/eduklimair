import DrawerInitiator from '../utils/drawer-initiator';
import { page } from '../routes/url-parser';

class App {
  constructor({ content }) {
    this._content = content;
    DrawerInitiator.init({ content: this._content });
  }

  async renderPage() {
    const content = page();
    this._content.innerHTML = await content.render();
    await content.afterRender();
  }
}

export default App;
