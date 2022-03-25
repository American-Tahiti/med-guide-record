/* element selector */
const inputDrug = document.querySelector(#'drug');
const btnSearch = document.querySelector('#btn-search');

/* input validation and error report */

function validateInput() {

    if(inputDrug.value == ""){
    alert('Invalid entry!');
}
else {
    const url = `SOURCE-URL`; 
    inputDrug(url);
}


}

/* Fetch */

function drug(url){
    fetch(url)
    .then(response =>
        response.json())
        .then(data => drug(data.message))
}
btnSearch.addEventListener('click', () => {
    validateInput();
})
