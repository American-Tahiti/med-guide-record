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

/* fetch */
function drug(url){
    fetch(url)
    .then(response =>
        response.json())
        .then(data => drug(data.message))
}
btnSearch.addEventListener('click', () => {
    validateInput();
})



/* Reads and parses external file into my app and displays data in my app from the external (.csv) file */

 /* Code for internal file on company network 
var urls = [\\nasv0708\specialty_macro_express\user files\Data Files\Med Guide.txt];
*/
/* Code for .csv file saved to personal computer */
var urls = [medguide.csv];
xhrDoc= new XMLHttpRequest();  

xhrDoc.open('GET', urls[0] , async)

if (xhrDoc.overrideMimeType)

    xhrDoc.overrideMimeType('text/plain; charset=x-user-defined')

xhrDoc.onreadystatechange =function()
{
if (this.readyState == 4)
{
    if (this.status == 200)
   {
    var data= this.response; //A string of the text data
   }
}                  
}

xhrDoc.send() //sending the request

 
 

/* Contains an array, dictionary or list that is populated with multiple values, retrieves at least one value and displays it in the application */

let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes();
console.log(time);


let array = currentTime;

currentTime[AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY];


 
 

/*  Contains a form with a submit button that saves input to an external file (and shows where the info is stored) */


 

 

/* Implements a log that records invalid inputs and writes them to a text file  */

