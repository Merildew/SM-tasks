const projectList = [
  {
    src: "spring-boot.svg",
    title: "Spring Boot",
    text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
  },
  {
    src: "spring-framework.svg",
    title: "Spring Framework",
    text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
  },
  {
    src: "spring-data.svg",
    title: "Spring Data",
    text: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
  },
  {
    src: "spring-cloud.svg",
    title: "Spring Cloud",
    text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
  },
  {
    src: "spring-data-flow.svg",
    title: "Spring Cloud Data Flow",
    text: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
  },
  {
    src: "spring-security.svg",
    title: "Spring Security",
    text: "Protects your application with comprehensive and extensible authentication and authorization support.",
  },
];

insertResult(projectList);

let typing;
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    clearTimeout(typing);
    typing = setTimeout(() => {
      const searchValue = event.target.value;
      insertResult(searchFunction(searchValue));
    }, 500);
  });

function searchFunction(value) {
  value = value.toLowerCase();
  return projectList.filter((project) => {
    return (
      project.title.toLowerCase().includes(value) ||
      project.text.toLowerCase().includes(value)
    );
  });
}

function insertResult(arr) {
  const projectSection = document.getElementById("projectsSection");
  projectSection.innerHTML = "";
  if (arr.length === 0) {
    projectSection.innerHTML = `<p class="projects-item no-result">No results</p>`;
  } else
    arr.forEach((item) => {
      projectSection.append(
        createProjectBlock(item.src, item.title, item.text)
      );
    });
}

function createProjectBlock(src, title, text) {
  const linkBlock = document.createElement("a");
  const img = document.createElement("img");
  const div = document.createElement("div");
  linkBlock.classList.add("projects-item");
  img.classList.add("project-icon");
  div.classList.add("project-text");
  img.setAttribute("src", `./src/assets/images/${src}`);
  img.setAttribute("alt", "");
  div.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
  linkBlock.append(img, div);
  return linkBlock;
}
