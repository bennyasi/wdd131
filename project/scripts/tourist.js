document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById("locationFilter");
    const attractions = document.querySelectorAll(".attraction");

    // Filter by Location
    filter.addEventListener("change", () => {
        const value = filter.value;
        attractions.forEach(attraction => {
            const title = attraction.querySelector("h3").textContent.toLowerCase();
            if (value === "all" || title.includes(value)) {
                attraction.style.display = "block";
            } else {
                attraction.style.display = "none";
            }
        });
    });

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("open");
            menuToggle.textContent = menu.classList.contains("open") ? "✖" : "☰";
        });
    }

    // Tourist Data
    const tourists = [
        { touristName: "Abuja", location: "Nigeria's Capital", dedicated: "1991", area: 50000, culture: "Modern", weather: "Tropical", imageUrl: "images/abuja.jpg", alt: "Abuja city skyline", description: "Abuja is the capital city of the Federal Republic of Nigeria." },
        { touristName: "Lagos", location: "Nigeria's Largest City", dedicated: "N/A", area: 200000, culture: "Vibrant", weather: "Tropical", imageUrl: "images/lagos.jpg", alt: "Lagos skyline and beaches", description: "Lagos is Nigeria’s largest city and a cultural powerhouse." },
        { touristName: "Calabar", location: "Cross River State", dedicated: "N/A", area: 75000, culture: "Colonial & Cultural", weather: "Humid Tropical", imageUrl: "images/calabar.jpg", alt: "View of Calabar streets", description: "Calabar is known for its rich cultural heritage and vibrant festivals." },
        { touristName: "Obudu Ranch", location: "Cross River State", dedicated: "N/A", area: 100000, culture: "Nature", weather: "Cool", imageUrl: "images/obudu.jpg", alt: "Green hills at Obudu Mountain Resort", description: "Obudu Cattle Ranch is a peaceful highland resort with stunning mountain views." },
        { touristName: "Yankari National Park", location: "Bauchi", dedicated: "N/A", area: 86600, culture: "Wildlife & Nature", weather: "Savanna", imageUrl: "images/yankari.jpg", alt: "Elephants at Yankari National Park", description: "Yankari National Park is a wildlife sanctuary and eco-tourism destination." },
        { touristName: "Olumo Rock", location: "Abeokuta", dedicated: "N/A", area: 35000, culture: "Historic", weather: "Tropical", imageUrl: "images/olumo.jpg", alt: "Tourists climbing Olumo Rock", description: "Olumo Rock is a historical site in Abeokuta, serving as a fortress during tribal wars." },
        { touristName: "Tinapa Resort", location: "Calabar, Cross River", dedicated: "N/A", area: 120000, culture: "Business & Leisure", weather: "Humid", imageUrl: "images/tinapa.jpg", alt: "Tinapa Resort aerial view", description: "Tinapa Resort combines business and leisure with shopping complexes and scenic hotel spaces." },
    ];

    const container = document.querySelector("#tourist-attraction-container");

    // Generate Tourist Cards
    function generateTouristCards(tourists) {
        container.innerHTML = "";
        tourists.forEach((tourist) => {
            const card = document.createElement("div");
            card.classList.add("tourist-attraction-card");

            card.innerHTML = `
                <h2>${tourist.touristName}</h2>
                <img src="${tourist.imageUrl}" alt="${tourist.alt}" loading="lazy">
                <p><strong>Location:</strong> ${tourist.location}</p>
                <p><strong>Dedicated:</strong> ${tourist.dedicated}</p>
                <p><strong>Total Area:</strong> ${tourist.area.toLocaleString()} sq ft</p>
                <p><strong>Culture:</strong> ${tourist.culture}</p>
                <p>${tourist.description}</p>
            `;

            container.appendChild(card);
        });
    }

    // Initial Load
    generateTouristCards(tourists);

    // Filter Tourists by Culture Type
    function filterTourists(type) {
        let filtered = [];
        switch (type) {
            case "modern":
                filtered = tourists.filter((t) => t.culture.toLowerCase().includes("modern"));
                break;
            case "nature":
                filtered = tourists.filter((t) => t.culture.toLowerCase().includes("nature"));
                break;
            case "historic":
                filtered = tourists.filter((t) => t.culture.toLowerCase().includes("historic"));
                break;
            case "all":
            default:
                filtered = tourists;
        }
        generateTouristCards(filtered);
    }

    // Button Filters
    document.querySelector("#filter-modern").addEventListener("click", () => filterTourists("modern"));
    document.querySelector("#filter-nature").addEventListener("click", () => filterTourists("nature"));
    document.querySelector("#filter-historic").addEventListener("click", () => filterTourists("historic"));
    document.querySelector("#filter-all").addEventListener("click", () => filterTourists("all"));

    // Dynamic Year in Footer
    document.querySelector("#footer-year").textContent = new Date().getFullYear();
});
