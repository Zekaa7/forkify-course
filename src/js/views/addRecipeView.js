import View from './View';
import icon from 'url:../../img/icons.svg';

export class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = `Recipe was succesfully uploaded`;
  _window = document.querySelector(`.add-recipe-window`);
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHiddeWindow();
  }
  toggleWindows() {
    this._overlay.classList.toggle(`hidden`);
    this._window.classList.toggle(`hidden`);
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindows.bind(this));
  }

  _addHandlerHiddeWindow() {
    this._btnClose.addEventListener('click', this.toggleWindows.bind(this));
    this._overlay.addEventListener('click', this.toggleWindows.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
