import { RouterHandler } from './router';

export default class App {
  constructor() {
    this.$title = document.querySelector('h1.accent');
    this.$btnGoTop = document.querySelector('.btn-top');
    this.currentTarget = null;

    new RouterHandler();
    this.checkDOMReady();
  }

  changeColorTheme() {
    if (this.currentEvent.classList.contains('accent')) {
      document.body.classList.toggle('night');
    }
  }

  clickEvents() {
    document.body.addEventListener('click', (event) => {
      this.currentEvent = event.target;
      console.log('click');
      this.changeColorTheme();
    });
  }

  scrollEvents() {
    let isScrolled = false;
    window.addEventListener('scroll', (event) => {
      console.log(event.target.scrollTop);
      isScrolled = window.scrollY;
      if (isScrolled) {
        this.$btnGoTop.classList.remove('visually-hidden');
      } else {
        this.$btnGoTop.classList.add('visually-hidden');
      }
    });
  }

  checkDOMReady() {
    window.addEventListener('DOMContentLoaded', () => {
      this.clickEvents();
      this.scrollEvents();
    });
  }
}
