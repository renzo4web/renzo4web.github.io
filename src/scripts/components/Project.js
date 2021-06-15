export const Project = (project, i) => {
  const { title, emoji, img, tecno, solution, problem } = project;

  const html = `
            <article  class="project">
             <div class="project__content">
                <h4 class="project__title">${title}</h4>
                <ul class="project__tecnologies">
                        ${tecno.map((tec) => `<li>${tec}-</li>`).join('')}
                </ul>  
                    <p class="project__text">
                        <strong>Why?</strong>
                       ${problem}
                    </p>
                    <p class="project__text">
                        <strong>Solution:</strong>
                        ${solution}
                    </p>
                    <a aria-label="Live demo" class="project__link" href="#">Live Demo</a>
             </div>
            </article>
  `;

  return html;
};
