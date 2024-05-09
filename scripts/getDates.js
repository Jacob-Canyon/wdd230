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