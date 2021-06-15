import { getProjects } from '../Pages/Projects';
import { Project } from './Project';

export class Portofio {
  constructor() {
    this.$controls = document.querySelector('.showcase-controls');
    this.$portfolioContainer = document.querySelector('.home-projects');
    this.initBtnsEvents();
  }

  async changePortfolioContent(what) {

    let query = 'apps';

    if (what === 'landings') query = 'landings';
    if (what === 'node') query = 'node';

    const data = await getProjects(query);
    this.$portfolioContainer.innerHTML = `
    ${data.map((pj, i) => Project(pj, i)).join('')}
    `;
  }

  initBtnsEvents() {
    this.$controls.addEventListener('click', ({ target }) => {
      if (!target.classList.contains('showcase__btn')) return;
      this.changePortfolioContent(target.dataset.content);
    });
  }
}
