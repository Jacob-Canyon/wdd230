const baseURL = "https://jacob-canyon.github.io/wdd230/";

const linksURL = "https://jacob-canyon.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let activites = document.querySelector('#activities');
        let card = document.createElement('li');


        card.textContent = `${week.week}: `
        //link.textContent = ();


        activites.appendChild(card);

        week.links.forEach((items) => {

            let link = document.createElement('a');

            console.log(items.title);

            link.textContent = `${items.title} | `;

            link.setAttribute("href", (items.url));



            card.appendChild(link);


        })



    });
}

getLinks();