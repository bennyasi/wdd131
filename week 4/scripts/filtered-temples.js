// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
      menuToggle.addEventListener("click", function () {
          menu.classList.toggle("open");
          // Toggle between hamburger (☰) and close (✖) icon
          menuToggle.textContent = menu.classList.contains("open") ? "✖" : "☰";
      });
  } else {
      console.error("Menu toggle button or menu not found in DOM.");
  }
});

// Temple data array with corrected property names
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      alt: "Aba Nigeria",
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      alt: "Manti Utah",
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      alt: "Payson Utah",
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      alt: "Yigo Guam",
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      alt: "Washington D.C",
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      alt: "Lima Peru",
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      alt: "Mexico City Mexico",
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Antanarivo Madagascar",
      location: "Antehiroka, Antanarivo Madagascar",
      dedicated: "2025, March, 15",
      area: 10000,
      alt: "Antanarivo Madagascar",
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/antananarivo-madagascar-temple/antananarivo-madagascar-temple-57245-main.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Chalan Pale Ramon Lagu, Yigo,  Guam",
      dedicated: "2022, May, 22",
      area: 6861,
      alt: "Yigo Guam",
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
      templeName: "Quito Ecuador",
      location: "Cumbaya, Quito Ecuador",
      dedicated: "2022, November, 20",
      area: 36780,
      alt: "Quito Ecuador",
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
  },
  {
      templeName: "Rome Italy",
      location: "Via di Settebagni, Rome Italy",
      dedicated: "2019, March, 10-12",
      area: 41010,
      alt: "Rome Italy",
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
      templeName: "Adelaide Australia",
      location: "Maden, South Adelaide, Australia",
      dedicated: "2000, June, 15",
      area: 10700,
      alt: "Adelaide Australia",
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
  },
];

// Dynamically generate temple cards with corrected formatting
const container = document.querySelector("#temple-container");

function generateTempleCards(templesToDisplay) {
  container.innerHTML = ""; // Clear existing content
  const selectedTemples = templesToDisplay.slice(0, 12); // Show only the first 12 temples
  selectedTemples.forEach(temple => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      // Display temple information above the image and make the name bold
      card.innerHTML = `
          <h2 style="font-weight: bold;">${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Total Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
      `;

      container.appendChild(card);
  });
}

// Initial render for the "Home" menu option (default to displaying all temples)
generateTempleCards(temples);

// Filter temples based on criteria
function filterTemples(criteria) {
  let filteredTemples = [];

  switch (criteria) {
      case "Old":
          filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
          break;
      case "New":
          filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
          break;
      case "Large":
          filteredTemples = temples.filter(t => t.area > 90000);
          break;
      case "Small":
          filteredTemples = temples.filter(t => t.area < 10000);
          break;
      default: // "Home"
          filteredTemples = temples;
  }

  generateTempleCards(filteredTemples);
}

// Update footer dynamically
document.querySelector("#footer-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;

// Example navigation menu implementation (assuming you have menu buttons in HTML)
document.querySelector("#old-btn").addEventListener("click", () => filterTemples("Old"));
document.querySelector("#new-btn").addEventListener("click", () => filterTemples("New"));
document.querySelector("#large-btn").addEventListener("click", () => filterTemples("Large"));
document.querySelector("#small-btn").addEventListener("click", () => filterTemples("Small"));
document.querySelector("#home-btn").addEventListener("click", () => filterTemples("Home"));
