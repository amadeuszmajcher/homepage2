import "../scss/main.scss";

console.log("HELLO 🚀");

fetch(
  "https://api.github.com/users/amadeuszmajcher/repos?sort=created"
)
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-gird--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;
      const template = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="img/github-icon.svg" alt="" />
          <h3 class="project__grid project__title">
            <span class="project__label">project:</span> <span>${name}</span>
          </h3>
          <p class="project__grid project__grid--description">
            <span class="project__label">description:</span>
            <span>${description}</span>
          </p>
          <p class="project__grid">
            <span class="project__label">demo:</span>
            <span>&lt;<a class="project__link" rel="noopener noreferrer" target="blank" href="${homepage}" title="${name} - demo">see_here</a>&gt;</span>
          </p>
          <p class="project__grid">
            <span class="project__label">github:</span>
            <span>&lt;<a class="project__link" rel="noopener noreferrer" target="blank" href="${html_url}" title="${name} - code">source_code</a>&gt;</span>
          </p>
        </div>
      </article>`;
      container.innerHTML += template;
    }
  })
  .catch((e) => console.log(e));
