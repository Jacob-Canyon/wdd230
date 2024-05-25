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
        let tile = document.createElement('span');
        let link = document.createElement('a');

        tile.textContent = `${week.tile}`
        link.textContent = (link);


        card.appendChild(tile);
        card.appendChild(link);

        activites.appendChild(card);

    });
}