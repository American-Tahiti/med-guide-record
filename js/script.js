`use strict`;

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

/* error tracking */
TrackJS.track('Testing TrackJS!');
                        

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

/* Parse .csv file */
import { createReadStream } from 'fs'; 
import parse from 'csv-parse'; 
import "should";

//var myReadStream = createReadStream('../in/*.csv');
var myReadStream = createReadStream('medguide.csv', { start: 100, end: 5999 });


var parser = parse({delimiter: ':'});

parser.write(myReadStream);

parser.on('error', function(err){
  console.log(err.message);
});

parser.on('finish', function(){
  output.should.eql([/*arrays from file*/]);
});
 

/* Contains an array, dictionary or list that is populated with multiple values, retrieves at least one value and displays it in the application */

let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
console.log(time);

function calcTime(city, offset) {
    var d = new Date()
    var utc = d.getTime()+(d.getTimezoneOffset() * 60000);
    var nd = new Date (utc + (3600000*offset));
    return "The local time of the " + city + " time zone is" + nd.toLocaleString();
}
console.log(calcTime('eastern', '-4'))
console.log(calcTime('central', '-5'))
console.log(calcTime('pacific', '-7'))
console.log(calcTime('mountain standard', '-7'))
console.log(calcTime('mountain daylight', '-6'))
console.log(calcTime('Alaska', '-8'))
console.log(calcTime('Hawaii', '-10'))

/*  Contains a form with a submit button that saves input to an external file (and shows where the info is stored) */


 

 

/* Implements a log that records invalid inputs and writes them to a text file  */

