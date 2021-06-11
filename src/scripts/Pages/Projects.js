import { view } from '../utils/view';
import { Project } from '../components/Project';

export const Projects = () => {
  const projectsArr = getProjects();

  document.title = 'Projects 📘';
  view.innerHTML = `
    <section class="projects container">
    <h2>Proyectos</h2>
            ${projectsArr.map(Project).join('')}
    </section>
    `;
};

const getProjects = () => {
  const projects = [
    {
      title: 'Pacman',
      emoji: 'video-game',
      img: {
        url:
          'https://camo.githubusercontent.com/a0252e7bd3bce5bd5982361f66fdb211b5c967a2a222f2080eeea63641597902/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f747572626f70696c612f696d6167652f75706c6f61642f76313631363238313438312f657a6769662e636f6d2d6769662d6d616b65725f6f6e69306e732e676966',
        alt: 'Pacmna Game',
      },
      tecno: 'loremajdf OISLdfjhasoihdoiashdn asoidhoiashdas',
      solution: 'dkkldkasdskldkklsklsklsaklasdas',
      problem: 'doiasujdiosuadi',
    },
    {
      title: 'Pacman',
      emoji: 'video-game',
      img: {
        url:
          'https://camo.githubusercontent.com/a0252e7bd3bce5bd5982361f66fdb211b5c967a2a222f2080eeea63641597902/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f747572626f70696c612f696d6167652f75706c6f61642f76313631363238313438312f657a6769662e636f6d2d6769662d6d616b65725f6f6e69306e732e676966',
        alt: 'Pacmna Game',
      },
      tecno: 'loremajdf OISLdfjhasoihdoiashdn asoidhoiashdas',
      solution: 'dkkldkasdskldkklsklsklsaklasdas',
      problem: 'doiasujdiosuadi',
    },
    {
      title: 'Pacman',
      emoji: 'video-game',
      img: {
        url:
          'https://camo.githubusercontent.com/a0252e7bd3bce5bd5982361f66fdb211b5c967a2a222f2080eeea63641597902/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f747572626f70696c612f696d6167652f75706c6f61642f76313631363238313438312f657a6769662e636f6d2d6769662d6d616b65725f6f6e69306e732e676966',
        alt: 'Pacmna Game',
      },
      tecno: 'loremajdf OISLdfjhasoihdoiashdn asoidhoiashdas',
      solution: 'dkkldkasdskldkklsklsklsaklasdas',
      problem: 'doiasujdiosuadi',
    },
    {
      title: 'Pacman',
      emoji: 'video-game',
      img: {
        url:
          'https://camo.githubusercontent.com/a0252e7bd3bce5bd5982361f66fdb211b5c967a2a222f2080eeea63641597902/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f747572626f70696c612f696d6167652f75706c6f61642f76313631363238313438312f657a6769662e636f6d2d6769662d6d616b65725f6f6e69306e732e676966',
        alt: 'Pacmna Game',
      },
      tecno: 'loremajdf OISLdfjhasoihdoiashdn asoidhoiashdas',
      solution: 'dkkldkasdskldkklsklsklsaklasdas',
      problem: 'doiasujdiosuadi',
    },
    {
      title: 'Pacman',
      emoji: 'video-game',
      img: {
        url:
          'https://camo.githubusercontent.com/a0252e7bd3bce5bd5982361f66fdb211b5c967a2a222f2080eeea63641597902/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f747572626f70696c612f696d6167652f75706c6f61642f76313631363238313438312f657a6769662e636f6d2d6769662d6d616b65725f6f6e69306e732e676966',
        alt: 'Pacmna Game',
      },
      tecno: 'loremajdf OISLdfjhasoihdoiashdn asoidhoiashdas',
      solution: 'dkkldkasdskldkklsklsklsaklasdas',
      problem: 'doiasujdiosuadi',
    },
  ];

  return projects;
};
