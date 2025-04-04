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
    }    // Dynamic Footer Updates
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
