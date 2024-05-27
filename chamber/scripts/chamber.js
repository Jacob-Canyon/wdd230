

const hamButton = document.querySelector('#hamButton');

const navElement = document.querySelector('.menuLinks');





document.querySelector('#lastModified').innerHTML = "Last Modified: " + document.lastModified;

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
});

function setTime() {
    var todaysDate = new Date();
    document.querySelector('#timestamp').value = todaysDate;
}



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

/*----------------------directory---------------------*/

const baseURL = "https://jacob-canyon.github.io/wdd230/";

const linksURL = "https://jacob-canyon.github.io/wdd230/chamber/data/members.json";

async function getCards() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);

}


const displayMembers = (members) => {
    members.forEach(member => {

        let cards = document.querySelector(".cards");
        let card = document.createElement('section');

        let businessLogo = document.createElement('img')
        let businessName = document.createElement('p');
        let businessAddress = document.createElement('p');
        let businessPhone = document.createElement('p');
        let businessURl = document.createElement('a');


        businessLogo.setAttribute('src', member.logo);
        businessLogo.setAttribute('alt', member.name);
        businessLogo.setAttribute('loading', 'lazy');
        businessLogo.setAttribute('width', '400');
        businessLogo.setAttribute('height', '400');

        businessURl.setAttribute('href', member.url);


        businessName.textContent = member.name;
        businessAddress.textContent = member.address;
        businessPhone.textContent = member.phone;
        businessURl.textContent = member.url;


        card.appendChild(businessLogo);
        card.appendChild(businessName);
        card.appendChild(businessAddress);
        card.appendChild(businessPhone);
        card.appendChild(businessURl);


        cards.appendChild(card);

    });


}

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector('article');


gridButton.addEventListener('click', () => {
    display.classList.add("cards");
    display.classList.remove("list");
});

listButton.addEventListener('click', showList);


function showList() {
    display.classList.add("list");
    display.classList.remove("cards");
}




