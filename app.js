import { projects } from "./projects.js";

const projectsContainer = document.querySelector(".projects-container");

window.addEventListener("DOMContentLoaded", () => {
  projectsContainer.innerHTML = `
  ${projects
    .map(({ code, image, siteURL }) => {
      return `<div class="project">
        <div class="img-container">
          <img class="site-img" src=${image} alt="" />
        </div>
        <div class="btns-container">
          <a target="_blank" href=${code} class="btn">
            <i class="fa-brands fa-github"></i> code
          </a>
          <a target="_blank" href=${siteURL} class="btn">
            <i class="fa-solid fa-globe-asia"></i> site
          </a>
        </div>
      </div>`;
    })
    .join("")}
    `;
});
