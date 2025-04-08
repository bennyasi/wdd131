
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
  // Generate product options dynamically using JavaScript
  const productArray = ["Flux Capacitor", "Power Lace", "Low Voltage Reactor","Warp Equalizer"]; // Replace with your product array
  const productSelect = document.getElementById("product-name");

  productArray.forEach((product) => {
      const option = document.createElement("option");
      option.value = product;
      option.text = product;
      productSelect.appendChild(option);
  });

  // Track review submissions using localStorage
window.addEventListener("load", () => {
    if (window.location.pathname.includes("review.html")) { 
        let reviewCounter = localStorage.getItem("reviewCounter") || 0;
        reviewCounter = parseInt(reviewCounter) + 1;
        localStorage.setItem("reviewCounter", reviewCounter);
        console.log(`Total reviews submitted: ${reviewCounter}`);
    }
});

// Update footer dynamically
document.querySelector("#footer-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;  