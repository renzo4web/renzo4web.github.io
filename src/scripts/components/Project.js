export const Project = (project) => {
  const { title, emoji, img, tecno, solution, problem } = project;

  const html = `
            <article class="project">
                <h4 class="project__title">
                    <span class="ec ec-${emoji}"></span>
                    ${title}
                </h4>
                <div class="project__content">
                    <p class="project__text">
                        <strong>Problem,</strong>
                       ${problem}
                    </p>
                    <p class="project__text">
                        <strong>Solution,</strong>
                        ${solution}
                    </p>
                    <p class="project__text">
                        <strong>Technologies,</strong>
                        ${tecno}.
                    </p>
                </div>
                <img class="project__img" src="${img.url}" alt="${img.alt}">
            </article>


  `;

  return html;
};
