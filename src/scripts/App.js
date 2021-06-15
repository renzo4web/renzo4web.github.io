import { RouterHandler } from './router';

export default class App {
  constructor() {
    this.$title = document.querySelector('h1.accent');
    this.$btnGoTop = document.querySelector('.btn-top');
    this.$btnThemeColor = document.querySelector('.btn-theme');
    this.$menuListMobile = document.querySelector('.mobile-show');
    this.currentTarget = null;

    new RouterHandler();
    this.checkDOMReady();
  }

  changeColorTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('isDark:', isDark);
    if (isDark) return;
    document.documentElement.classList.toggle('dark-mode');
  }

  showMobileNav(click) {
    if (!click) return;

    if (click.className.includes('mobile')) {
      this.$menuListMobile.classList.toggle('hide');
      return;
    }
    this.$menuListMobile.classList.add('hide');
  }

  clickEvents() {
    document.body.addEventListener('click', ({ target }) => {
      this.showMobileNav(target);
    });

    this.$btnThemeColor.addEventListener('click', () => {
      this.changeColorTheme();
    });
  }

  scrollEvents() {
    let isScrolled = false;
    window.addEventListener('scroll', () => {
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
