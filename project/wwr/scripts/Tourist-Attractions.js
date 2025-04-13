document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("open");
      menuToggle.textContent = menu.classList.contains("open") ? "✖" : "☰";
    });
  }

  const touristAttractions = [
    {
      attractionName: "Abuja",
      location: "Nigeria's Capital",
      dedicated: "1991",
      area: 50000,
      culture: "Modern",
      weather: "Tropical",
      imageUrl: "images/abuja.jpg",
      alt: "Abuja city skyline",
      description: "Abuja is the capital city of the Federal Republic of Nigeria, strategically situated at the geographic midpoint of the country. Established as the capital in 1991, Abuja was chosen for its central location, making it accessible from all parts of Nigeria."
    },
    {
      attractionName: "Lagos",
      location: "Nigeria's Largest City",
      dedicated: "N/A",
      area: 200000,
      culture: "Vibrant",
      weather: "Tropical",
      imageUrl: "images/lagos.jpg",
      alt: "Lagos skyline and beaches",
      description: "Lagos is Nigeria’s largest city and a cultural powerhouse. From bustling markets to vibrant nightlife, visitors can enjoy Lekki Conservation Centre, Tarkwa Bay Beach, National Theatre, and the ever-popular Nike Art Gallery."
    },
    {
      attractionName: "Calabar",
      location: "Cross River State",
      dedicated: "N/A",
      area: 75000,
      culture: "Colonial & Cultural",
      weather: "Humid Tropical",
      imageUrl: "images/calabar.jpg",
      alt: "View of Calabar streets",
      description: "Calabar is the capital city of Cross River State in southeastern Nigeria, situated near the Cameroon border. Historically, it served as a significant port during the colonial era, notably linked to the transatlantic slave trade. Today, Calabar is recognized for its rich cultural heritage and is often referred to as the tourism capital of Nigeria."
    },
    {
      attractionName: "Obudu Ranch",
      location: "Cross River State",
      dedicated: "N/A",
      area: 100000,
      culture: "Nature",
      weather: "Cool",
      imageUrl: "images/obudu.jpg",
      alt: "Green hills at Obudu Mountain Resort",
      description: "Obudu Cattle Ranch in Cross River State is a peaceful highland resort offering stunning mountain views, cool climate, hiking trails, and cable cars. It’s perfect for nature lovers and honeymooners."
    },
    {
      attractionName: "Yankari National Park",
      location: "Bauchi",
      dedicated: "N/A",
      area: 86600,
      culture: "Wildlife & Nature",
      weather: "Savanna",
      imageUrl: "images/yankari.jpg",
      alt: "Elephants at Yankari National Park",
      description: "Yankari National Park in Bauchi is a wildlife sanctuary home to elephants, baboons, lions, and the famous Wikki Warm Spring. It’s a top choice for safaris and eco-tourism adventures in Nigeria."
    },
    {
      attractionName: "Olumo Rock",
      location: "Abeokuta",
      dedicated: "N/A",
      area: 35000,
      culture: "Historic",
      weather: "Tropical",
      imageUrl: "images/olumo.jpg",
      alt: "Tourists climbing Olumo Rock",
      description: "Located in Abeokuta, Olumo Rock is a historical site that served as a refuge during war times. Visitors can explore natural caves, climb the rock, and take in sweeping views of the city below."
    },
    {
      attractionName: "Tinapa Resort",
      location: "Calabar, Cross River",
      dedicated: "N/A",
      area: 120000,
      culture: "Business & Leisure",
      weather: "Humid",
      imageUrl: "images/tinapa.jpg",
      alt: "Tinapa Resort aerial view",
      description: "Tinapa Resort in Calabar, Cross River State, combines business and leisure with features like a shopping complex, film studio, water park, and a scenic lakeside hotel. It's one of Nigeria’s most unique tourism and entertainment hubs."
    }
  ];

  const container = document.querySelector("#temple-container");

  function generateTempleCards(attractions) {
    container.innerHTML = "";
    attractions.forEach(attraction => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      card.innerHTML = `
        <h2>${attraction.attractionName}</h2>
        <img src="${attraction.imageUrl}" alt="${attraction.alt}" loading="lazy">
        <p><strong>Location:</strong> ${attraction.location}</p>
        <p><strong>Dedicated:</strong> ${attraction.dedicated}</p>
        <p><strong>Total Area:</strong> ${attraction.area.toLocaleString()} sq ft</p>
        <p><strong>Culture:</strong> ${attraction.culture}</p>
        <p><strong>Weather:</strong> ${attraction.weather}</p>
        <p>${attraction.description}</p>
      `;

      container.appendChild(card);
    });
  }

  // Initial load
  generateTempleCards(touristAttractions);

  // Filter attractions
  function filterTemples(criteria) {
    let filtered = [];
    switch (criteria) {
      case "Old":
        filtered = touristAttractions.filter(t => parseInt(t.dedicated) < 1900);
        break;
      case "New":
        filtered = touristAttractions.filter(t => parseInt(t.dedicated) > 2000);
        break;
      case "Large":
        filtered = touristAttractions.filter(t => t.area > 90000);
        break;
      case "Small":
        filtered = touristAttractions.filter(t => t.area < 10000);
        break;
      default:
        filtered = touristAttractions;
    }
    generatetourist-Atrraction(filtered);
  }

  // Footer year
  document.querySelector("#footer-year").textContent = new Date().getFullYear();

  // Button listeners
  document.querySelector("home").addEventListener("click", () => filterhome("home"));
  document.querySelector("tourist-attractions").addEventListener("click", () => filtertourist-Attractions("tourist"));
  document.querySelector("#culture-tradiction").addEventListener("click", () => filterculture-tradition("culture"));
  document.querySelector("#weather-travel-guide").addEventListener("click", () => filterweather-travel("weather"));
  document.querySelector("#home-btn").addEventListener("click", () => filterTemples("Home"));
});
