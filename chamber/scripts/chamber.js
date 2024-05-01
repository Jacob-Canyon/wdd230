
document.querySelector('#lastModified').innerHTML = "Last Modified: " + document.lastModified;

const hamButton = document.querySelector('#hamButton');

const navElement = document.querySelector('.menuLinks');

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
});

