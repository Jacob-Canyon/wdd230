
const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != "") {

        chapterArray.push(input.value);

        displayList(input.value);


        setChapterList();

        input.value = '';

        input.focus();
    }
});

function displayList(item) {

    const li = document.createElement('li');

    const deleteButton = document.createElement('button');

    li.textContent = item;

    deleteButton.textContent = '❌';

    deleteButton.classList.add('delete');

    li.append(deleteButton);

    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent)
        input.focus();
    });
}




function setChapterList() {
    localStorage.setItem('myFavList', JSON.stringify(chapterArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavList'));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);

    chapterArray = chapterArray.filter((item) => item !== chapter)

    setChapterList();
}

/*button.addEventListener('click', () => {
    if (input.value != "") {


        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    }
});
*/
