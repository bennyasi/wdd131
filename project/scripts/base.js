const today = new Date(); 
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// menu navigation button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

const visitCount = document.querySelector("#visit-num");
let visitNum = GetVisitNum();

if (document.title === "Bennyasi Tourist Cultural-hub || Home Page") {
    visitNum++;
    DisplayVisitNum(visitNum);
    SetVisitNum();
}

function GetVisitNum() {
    return JSON.parse(this.localStorage.getItem("numVisits"));
}

function DisplayVisitNum(visits) {
    visitCount.innerHTML = visits;
}

function SetVisitNum() {
    this.localStorage.setItem("numVisits", JSON.stringify(visitNum));
}

// Array for storing cultures.
const cultures = [
    {
        cultureName: "Calabar Culture",
        cultureImg: "images/calabar-carnival.jpg",
        infoLink: "https://en.wikipedia.org/touris/calabar-culture"
    },
    {
        cultureName: "Igbo Culture",
        cultureImg: "images/igbo-culture.jpg",
        infoLink: "https://en.wikipedia.org/wiki/Igbo_culture"
    },
    {
        cultureName: "Yoruba Culture",
        cultureImg: "images/yoruba-culture.jpg",
        infoLink: "https://en.wikipedia.org/wiki/Yoruba_people#Culture"
    },
    {
        cultureName: "Hausa Culture",
        cultureImg: "images/hausa-culture.jpg",
        infoLink: "https://en.wikipedia.org/wiki/Hausa_people#Culture"
    },
    {
        cultureName: "Benin Culture",
        cultureImg: "images/benin-culture.jpg",
        infoLink: "https://en.wikipedia.org/wiki/Benin_Empire"
    }
];

function DisplayRandomCultures(cultureList) {
    for (var i = 0; i < 4; i++) {
        let randomCulture = cultureList[Math.floor(Math.random() * cultureList.length)];
        let box = document.querySelector("#culture");
        box.innerHTML += `
        <div class="random-card">
            <figure>
                <img src="${randomCulture.cultureImg}" alt="${randomCulture.cultureName}" loading="lazy" width="150" height="180">
            </figure>
            <h3>${randomCulture.cultureName}</h3>
            <a href="${randomCulture.infoLink}" target="_blank">
                <button class="full-info">Explore Culture</button>
            </a>
        </div>`;
    }
}

DisplayRandomCultures(cultures);
