import User from '../../data/user';
import API_ENDPOINT from '../../globals/api-endpoint';

const Favorite = {
  async render() {
    return `
      <div id="containerFavorite1">
      <h1>FAVORITE</h1>
      <div id="containerFavorite2"></div>
      </div>`;
  },
  async afterRender() {
    const toast = document.querySelector('app-toast');
    try {
      const { error, data, message } = await User.favorite();
      if (error) return toast.danger(message);
      const { articles } = data;
      document.getElementById('containerFavorite2').innerHTML = `
        ${articles.map((article) => `
        <div class="containerFavorite3">
            <img src="${API_ENDPOINT.IMAGE_SM(article.imageId)}" width="100%">
            <div class="containerFavorite4">
                <h3>${article.title}</h3>
                <div style="overflow: hidden; height: 65px">
                    <p>${article.content}...</p>
                </div>
                <a href="#/articles/${articles.category}/${articles.id}" id="readmore">Read More</a>
            </div>
        </div> 
        `).join('')}
        `;
    } catch {
      toast.danger('Fecth failed');
    }
  },
};

export default Favorite;
