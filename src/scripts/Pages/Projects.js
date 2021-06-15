import { view } from '../utils/view';
import { Project } from '../components/Project';

export const Projects = async () => {
  const data = await getProjects();

  let portfolioContent = [];

  for (const portfolioSection in data) {
    if (Object.prototype.hasOwnProperty.call(data, portfolioSection)) {
      portfolioContent = [...portfolioContent, data[portfolioSection]];
    }
  }
  const colors = ['#E5D5C5', '#bfbfbf', '#191919', '#7f7f7f', '#8c8c8c'];

  document.title = 'Renzo | Projects';
  view.innerHTML = `
    <section class="projects">
            ${portfolioContent
              .flat(1)
              .map((pj, i) => Project(pj, i, colors))
              .join('')}
    </section>
    `;
};

export const getProjects = async (content) => {
  try {
    const result = await fetch('https://api.npoint.io/3e306dabd7dfc814de43');
    const data = await result.json();
    if (!content) {
      return data;
    }
    return data[content];
  } catch (e) {
    console.warn(e);
  }
};
