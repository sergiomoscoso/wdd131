const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-9680-thumb.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-39103-thumb.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  }
];

const gridContainer = document.querySelector("#res-grid");
const pageHeading = document.querySelector("#page-heading");
const navLinks = document.querySelectorAll(".navigation a");
const menuButton = document.querySelector("#menu-button");
const navList = document.querySelector(".navigation");

function getDedicationYear(dedicatedString) {
  return parseInt(dedicatedString.split(",")[0].trim(), 10);
}

function createTempleCard(temple) {
  const card = document.createElement("article");
  card.classList.add("temple-card");

  const nameHeading = document.createElement("h2");
  nameHeading.textContent = temple.templeName;

  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("temple-details");

  const locationP = document.createElement("p");
  locationP.innerHTML = `<strong>Location:</strong> ${temple.location}`;

  const dedicatedP = document.createElement("p");
  dedicatedP.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

  const areaP = document.createElement("p");
  areaP.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

  detailsDiv.append(locationP, dedicatedP, areaP);

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = `${temple.templeName} Temple`;
  image.loading = "lazy";
  image.width = 400;
  image.height = 220;

  card.append(nameHeading, detailsDiv, image);
  return card;
}

function displayTemples(templeList) {
  if (!gridContainer) return;
  gridContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  templeList.forEach((temple) => {
    fragment.appendChild(createTempleCard(temple));
  });
  gridContainer.appendChild(fragment);
}

function setActiveLink(activeId) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.id === activeId);
  });
}

function applyFilter(filterType) {
  let filteredList = temples;
  let headingText = "Home";

  switch (filterType) {
    case "old":
      filteredList = temples.filter((t) => getDedicationYear(t.dedicated) < 1900);
      headingText = "Old";
      break;
    case "new":
      filteredList = temples.filter((t) => getDedicationYear(t.dedicated) > 2000);
      headingText = "New";
      break;
    case "large":
      filteredList = temples.filter((t) => t.area > 90000);
      headingText = "Large";
      break;
    case "small":
      filteredList = temples.filter((t) => t.area < 10000);
      headingText = "Small";
      break;
    default:
      filteredList = temples;
      headingText = "Home";
      break;
  }

  if (pageHeading) {
    pageHeading.textContent = headingText;
  }
  setActiveLink(filterType);
  displayTemples(filteredList);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    applyFilter(link.id);
    if (navList && menuButton) {
      navList.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});

if (menuButton && navList) {
  menuButton.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedP = document.querySelector("#lastModified");
if (lastModifiedP) {
  lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}

displayTemples(temples);