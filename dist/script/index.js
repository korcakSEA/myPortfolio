
// Aiming the menu icon and nav links
const menuhamburger = document.querySelector('.navbar__icon');
const navlinks = document.querySelector('.navbar__links');

// Adding the click event listener to the menu icon
menuhamburger.addEventListener('click', () => {
  navlinks.classList.toggle('navbar__links--visible');
});


// Theme Toggle Script
// Select the theme toggle button and body element
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Adding event listener to theme toggle button
themeToggleBtn.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body element
  body.classList.toggle('dark-mode');
});

// Generating Skills Section in HTML
let skillsHTML = '';

skills.forEach(skill => {

  skillsHTML = skillsHTML + `
              <div class="group">
            <div class="group__icon">
              <img src="${skill.icon}" alt="">
            </div>
            <p class="group__tech">${skill.name}</p>
          </div>`
});

document.querySelector(".skills__flex-js").innerHTML = skillsHTML;

// Generating Projects Section in HTML
let projectsHTML = '';

projects.forEach(project => {

  // Generate spans for each tech dynamically
  // I created a new new array, such as [`<span>${tech}</span>`, `<span>${tech}</span>`]
  // then with join() method , convert the array into a string then add it inside of .back__tech class
  const techsHTML = project.techs.map(tech => `<span>${tech}</span>`).join('');
  console.log(techsHTML);
  
  projectsHTML = projectsHTML + `
          <div class="projects__card-container">
            <div class="projects__card">
              <div class="projects__card-front">
                <img src="${project.image}" alt="Screenshot of ${project.name}" loading="lazy">
                <div>
                  <h3>${project.name}</h3>
                  <p>${project.purpose}</p>
                </div>
              </div>
              <div class="projects__card-back">
                <div class="back">
                  <h3 class="back__title">${project.name}</h3>
                  <p class="back__description">${project.techPurpose}
                  </p>
                  <div class="back__tech">
                    ${techsHTML}
                  </div>
                  <div class="back__links">
                    <a class="code" href="${project.codeURL}" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      Code
                    </a>
                    <a class="demo" href="${project.liveURL}" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16"
                        height="16" id="external-link" fill="none" stroke="currentColor">
                        <path
                          d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z">
                        </path>
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
});

document.querySelector(".projects__grid-js").innerHTML = projectsHTML;
