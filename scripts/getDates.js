const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener("click", () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open')
})

document.querySelector('#year').innerText = new Date().getFullYear();

document.querySelector('#lastModified').innerHTML = "Last Modified: " + document.lastModified;

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = 'This is your 1st visit!'
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);

/*------------weather api ---------------------*/

const currenTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.4&lon=-111.964&appid=af351d0e3cc9bbcf84b4f43842193c46&units=imperial'


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currenTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    console.log(desec)
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('',);
    captionDesc.textContent = `${desc}`;
}
apiFetch();