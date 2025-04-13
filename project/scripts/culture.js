function MakeCultureCard(cultureList) {
    cultureList.forEach(function(culture) {
        let container = document.querySelector("#culture");
        container.innerHTML += `
            <div class="culture-card">
                <figure>
                    <img src="${culture.cultureImg}" alt="${culture.cultureName}" loading="lazy" width="220" height="250">
                </figure>
                <h3>${culture.cultureName}</h3>
                <a href="${culture.touristSteps}" target="_blank">
                    <button class="tourist-steps">Full Culture</button>
                </a>
            </div>
        `;
    });
}

// Example call to the function
MakeRecipeCard(cultureList);
