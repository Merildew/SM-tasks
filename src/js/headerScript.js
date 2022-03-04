const headerItems = [
  {
    title: "Why Spring",
    items: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Application",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Learn",
    items: ["Overview", "Quickstart", "Guides", "Blog"],
  },
  {
    title: "Projects",
    items: [
      "Spring Boot",
      "Spring Framework",
      "Spring Cloud",
      "Spring Cloud Data Flow",
      "Spring Data",
      "Spring Integration",
      "Spring Batch",
      "Spring Security",
      "View all projects",
      "Spring Tools 4",
      "Spring Initializr",
    ],
  },
  {
    title: "Training",
    items: null,
  },
  {
    title: "Support",
    items: null,
  },
  {
    title: "Community",
    items: ["Overview", "Events", "Team"],
  },
];

insertHeader(document.getElementById("navList"), ["dropdown"]);
insertHeader(document.getElementById("navListMobile"), [
  "dropdownMobile",
  "display",
]);

function insertHeader(parentNode, className) {
  headerItems.forEach((item) => {
    parentNode.append(
      createHeaderElement(item.title, item.items, ...className)
    );
  });
}

function createHeaderElement(title, items, ...className) {
  const navItem = document.createElement("li");
  navItem.classList.add("nav-item");
  if (items !== null) {
    const div = document.createElement("div");
    div.classList.add("title-container");
    div.innerHTML = `<span>${title}</span><div class="nav-arrow"></div>`;
    const ul = document.createElement("ul");
    ul.classList.add(...className);
    items.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `<a>${element}</a>`;
      ul.append(li);
    });
    if (title === "Projects") {
      customizeProject(ul);
    }
    navItem.append(div, ul);
  } else navItem.innerHTML = `<a class="nav-link">${title}</a>`;
  return navItem;
}

function customizeProject(parentNode) {
  const arrayLi = parentNode.childNodes;
  const viewNode = [...arrayLi].find(
    (elem) => elem.innerHTML == "<a>View all projects</a>"
  );
  viewNode.firstChild.classList.add("a-wrapper");
  const li = document.createElement("li");
  li.classList.add("small-font");
  li.textContent = "DEVELOPMENT TOOLS";
  parentNode.insertBefore(li, viewNode.nextSibling);
  parentNode.lastChild.innerHTML = `<a>Spring Initializr
        <svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <polyline points="15 10.94 15 15 1 15 1 1 5.06 1" fill="none" stroke="currentColor" stroke-miterlimit="10"
                stroke-width="2"></polyline>
            <polyline points="8.93 1 15 1 15 7.07" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2">
            </polyline>
            <line x1="15" y1="1" x2="8" y2="8" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></line>
        </svg></a>`;
}

[...document.getElementsByClassName("dropdownMobile")].forEach((elem) => {
  elem.previousElementSibling.addEventListener("click", (event) => {
    const dropdown = elem;
    dropdown.style = "";
    if (dropdown.offsetHeight === 0) {
      elem.previousElementSibling.lastChild.classList.toggle("nav-arrow-scale");
      dropdown.classList.toggle("display");
      const height = dropdown.offsetHeight;
      dropdown.style.height = 0;
      let counter = 0;
      const movement = setInterval(function () {
        counter += 3;
        dropdown.style.height = `${counter}px`;
        if (counter >= height) {
          clearInterval(movement);
        }
      }, 0);
    } else {
      elem.previousElementSibling.lastChild.classList.toggle("nav-arrow-scale");
      const height = dropdown.offsetHeight;
      let counter = height;
      const movement = setInterval(function () {
        counter -= 3;
        dropdown.style.height = `${counter}px`;
        if (counter <= 0) {
          dropdown.classList.toggle("display");
          clearInterval(movement);
        }
      }, 0);
    }
  });
});

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navListMobile").classList.toggle("show");
  const burgerLines = document.getElementsByClassName("burger-bar");
  burgerLines[0].classList.toggle("burger-bar-1");
  burgerLines[1].classList.toggle("burger-bar-2");
  burgerLines[2].classList.toggle("burger-bar-3");
});
