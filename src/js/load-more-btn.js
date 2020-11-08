class BtnLoadMore {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);
    hidden && this.hide();
  }
  getRefs(selector) {
    const refs = {};
    refs.btnLoad = document.querySelector(selector);
    refs.btnLoadText = refs.btnLoad.querySelector('.button-load-text');
    refs.btnLoadSpiner = refs.btnLoad.querySelector('.spinner-border');
    return refs;
  }
  enable() {
    this.refs.btnLoad.disabled = false;
    this.refs.btnLoadText.textContent = 'Load more';
    this.refs.btnLoadSpiner.classList.add('is-hidden');
  }
  disable() {
    this.refs.btnLoad.disabled = true;
    this.refs.btnLoadText.textContent = 'Loading...';
    this.refs.btnLoadSpiner.classList.remove('is-hidden');
  }
  show() {
    this.refs.btnLoad.classList.remove('is-hidden');
  }
  hide() {
    this.refs.btnLoad.classList.add('is-hidden');
  }
}

export { BtnLoadMore };