document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const container = document.getElementById("temple-cards-container");
  console.log("Container found:", container);

  const attractions = [
      {
          name: " Nigeria",
          image: "images/arms.jpg",
          description: "Giants of Africa."
      }, // Added a comma here
      {
          name: "Abuja City",
          image: "images/abuja.jpg",
          description: "Capital city of Nigeria."
      },
      {
          name: "Zuma Rock",
          image: "images/zuma-rock.jpg",
          description: "A monolithic rock located in Niger State."
      },
      {
          name: "Obudu Ranch",
          image: "images/obudu-ranch.jpg",
          description: "Tourist center located in Cross River State."
      },
      {
          name: "Lekki Conservation Center",
          image: "images/lekki.jpg",
          description: "A natural reserve located in Lagos State."
      }
  ];

  function populateAttractionCards() {
      console.log("Populating attraction cards...");

      attractions.forEach(attraction => {
          const card = document.createElement("div");
          card.className = "card";

          const img = document.createElement("img");
          img.src = attraction.image;
          img.alt = attraction.name;

          const title = document.createElement("h3");
          title.textContent = attraction.name;

          const description = document.createElement("p");
          description.textContent = attraction.description;

          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(description);

          container.appendChild(card);
      });
  }

  populateAttractionCards();
});