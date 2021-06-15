import { view } from '../utils/view';
import { HomePage } from '../components/Home';
import { getProjects } from './Projects';
import { Project } from '../components/Project';
import { Portofio } from '../components/Portofolio-Home';
export const Home = async () => {
  document.title = 'Home | Renzo';

  const projectsArr = await getProjects('apps');
  console.log('projectsArr:', projectsArr);

  view.innerHTML = `${HomePage()}
  <div class="marquee"> <div></div> </div>
  <div class="portfolio-header">
  <h3 class="section-heading">PORTFOLIO</h3>
  <div class="showcase-controls">
    <button data-content="apps" data-wenk="Fun web app made in plain JS" class="showcase__btn">Apps</button>
    <button data-content="landings" data-wenk="Some ❤ly pages" class="showcase__btn">Landings</button>
    <button data-content="node" data-wenk="Scrapping, Backend, Bots" class="showcase__btn">Node</button>
  </div>
  </div>

  <section class="projects home-projects">
    ${projectsArr.map((pj, i) => Project(pj, i)).join('')}
    </section>

    `;
  new Portofio();
};
