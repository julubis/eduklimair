class Toast extends HTMLElement {
  success(message) {
    this.innerHTML = `
    <div class="toast-success">
      <p>${message}</p>
    </div>`;
    setTimeout(() => {
      this.innerHTML = '';
    }, 3000);
  }

  danger(message) {
    this.innerHTML = `
    <div class="toast-danger">
      <p>${message}</p>
    </div>`;
    setTimeout(() => {
      this.innerHTML = '';
    }, 3000);
  }
}

customElements.define('app-toast', Toast);
