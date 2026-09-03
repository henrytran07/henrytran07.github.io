let educationHTML = document.getElementById('education-container');

async function loadEducationInfo() {
  let response = await fetch("data/education.json"); 
  let jsonFile = await response.json(); 

  jsonFile.forEach((education) => {
    educationHTML.innerHTML += `
      <div class="education-info">
        <span class="timeline">${education.graduation_year}</span>
        <span class="text-bold">${education.major}</span>
        <p>${education.name}</p>
      </div>
    `;
  }); 
}

loadEducationInfo();

let projectHTML = document.getElementById('project-container'); 

async function loadProjectInfo() {
  let response = await fetch("data/projects.json"); 
  let jsonFile = await response.json(); 

  jsonFile.forEach((project) => {
    projectHTML.innerHTML += `
      <div class="experience-info">
        <span class="timeline">${project.year}</span>

        <span class="text-bold">
          ${project.name}
        </span>

        <span class="icon-link">
          <a
            href="${project.link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${project["icon-link"].icon}
            ${project["icon-link"].name}
          </a>
        </span>
      </div>

      <div class="skills">
        <p>${project.skills}</p>
      </div>

      <div class="authors">
        <p>${project.author}</p>
      </div>
    `;
  }); 
}

loadProjectInfo();

let courseWorkHTML = document.getElementById('coursework-container'); 

async function loadCWInfo() {
  let response = await fetch("data/coursework.json"); 
  let jsonFile = await response.json(); 

  jsonFile.forEach((coursework) => {
    courseWorkHTML.innerHTML += `
      <div class="coursework-split">
        <span class="text-bold">${coursework.name}</span>
        <div class="classes">
          <ul>
            ${coursework.courses.map(course => {
              return `<li>${course}</li>`; 
            }).join("")}
          </ul>
        </div>
      </div>
    `; 
  }); 
}

loadCWInfo(); 

let skillHTML = document.getElementById("skill-container"); 

async function loadSkillInfo() {
  let response = await fetch("data/skills.json"); 
  let jsonFile = await response.json(); 

  jsonFile.forEach((skill) => {
    skillHTML.innerHTML += `
      <div class="skill-split">
        <span class="text-bold">${skill.name}</span>
        <div class="my-skill">
          <ul>
            ${skill.skill_name.map(my_skill => {
              return `<li>${my_skill}</li>`
            }).join("")}
          </ul>
        </div>
      </div>
    `
  }); 
}

loadSkillInfo(); 