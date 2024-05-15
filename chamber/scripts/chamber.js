

const hamButton = document.querySelector('#hamButton');

const navElement = document.querySelector('.menuLinks');

document.querySelector('#lastModified').innerHTML = "Last Modified: " + document.lastModified;

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
});






/* Days since last visit */


function setLastVist() {
    window.localStorage.setItem("lastVisit", JSON.stringify(new Date()));
}

function displayDaysSinceLastVisit() {
    let lastVisit = Date.parse(JSON.parse(window.localStorage.getItem("lastVisit")));

    const visitsDisplay = document.querySelector('.daysSinceLastVisit');

    if (!lastVisit) {
        visitsDisplay.innerText = "Welcome! Let us know if you have any questions."
        setLastVist();
        return;
    }

    else {

        const difference = (new Date() - lastVisit);

        const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

        console.log(differenceInDays);


        if (differenceInDays > 1) {
            visitsDisplay.innerText = visitsDisplay.innerText = `You last visited ${differenceInDays} days ago.`
            setLastVist();
        }

        if (differenceInDays == 1) {
            visitsDisplay.innerText = `You last visited ${differenceInDays} day ago.`
            setLastVist();

        }

        if (differenceInDays == 0) {
            visitsDisplay.innerText = "Back so soon! Awesome!"
            setLastVist();
        }



    }


}

