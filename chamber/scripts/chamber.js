

const hamButton = document.querySelector('#hamButton');

const navElement = document.querySelector('.menuLinks');

document.querySelector('#lastModified').innerHTML = "Last Modified: " + document.lastModified;

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
});


function getLastVisit() {
    return Date.parse(JSON.parse(localStorage.getItem("lastVisit")));
}

function setLastVist() {
    localStorage.setItem("lastVisit", JSON.stringify(new Date()));
}

/* Days since last visit */


function displayDaysSinceLastVisit() {

    const visitsDisplay = document.querySelector('.daysSinceLastVisit');
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        visitsDisplay.innerText = "Welcome! Let us know if you have any questions."
        return;
    }

    const lastVisitDate = getLastVisit();

    console.log(lastVisitDate)

    if (!lastVisit) {
        return;
    }

    const currentDate = new Date();

    console.log(currentDate);

    const difference = currentDate - lastVisitDate;
    console.log(difference);
    const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    visitsDisplay.innerText = differenceInDays;

    setLastVist();


}