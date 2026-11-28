const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProducts() {
  const productSelect = document.querySelector("#product-name");
  if (!productSelect) return;

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

function updateReviewCounter() {
  const countDisplay = document.querySelector("#review-count");
  if (!countDisplay) return;

  const storageKey = "wdd131ReviewCount";
  let currentCount = Number(localStorage.getItem(storageKey)) || 0;
  currentCount += 1;
  localStorage.setItem(storageKey, String(currentCount));
  countDisplay.textContent = String(currentCount);
}

function updateFooterDates() {
  const yearSpan = document.querySelector("#currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedP = document.querySelector("#lastModified");
  if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
  }
}

populateProducts();
updateReviewCounter();
updateFooterDates();