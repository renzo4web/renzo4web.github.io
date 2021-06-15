export const HomePage = () => {
  return `
  <header class="header">

        <h1>Hi, I'm Renzo 
        <span role="img" aria-label="waving hand emjoi">👋</span>
        </h1>
        <small>Frontend Developer Coffee-powered ☕</small>
            <p>
                Frontend developer enthusiastic about all web technologies,\n
                always ready to <strong class="accent">solve problems</strong> through code.
            </p>
            
        <div class="header__btns">
            <a class="header__btn" target="_blank" href="https://www.linkedin.com/in/renzobarrios/">See my linkedin</a>
            <a class="header__btn" target="_blank" href="https://github.com/renzo4web">See my Github</a>
        </div>
    </header>

    <section class="about-me">

            <div class="bio-controls">
            <form class="bio-length">
                <legend>Bio Length</legend>
                <div class="form-group">
                    <input checked type="radio" name="long" id="long-bio">
                    <label for="long-bio">I have Time</label>
                </div>
                <div class="form-group">
                    <input type="radio" name="short" id="short-bio">
                    <label for="shoert-bio">I'm in a hurry</label>
                </div>
            </form>
        </div>
            <p>
                I'm currently exploring new opportunities and side projects\n
                <a href="#/work-gallery">See some of my past work & projects.</a>
            </p>
        
            <p>
            Right now I'm focusing on learning more about <span class="javascript-txt">JavaScript</span>, <span class="react-txt">React</span>. One day I'll evolve into the mythical✨full-stack developer✨.
            </p>
    </section>`;
};
