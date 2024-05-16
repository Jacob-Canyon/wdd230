const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const feedback = document.querySelector("#feedback");

password2.addEventListener('focusout', controlar)

function controlar() {
    console.log('inside the function')
    if (password.value !== password2.value) {
        //console.log('values do not match')
        password.value = "";
        password2.value = "";
        password.focus()
        feedback.textContent = "Passwords do not match Try Again"
    }

    else {
        //console.log('values match!')
        feedback.textContent = "";

    }
}
