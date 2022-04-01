`use strict`;

/* element selector */
const inputDrug = document.querySelector('#drug');
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
$.ajax({
    url: '../medguide.csv',
    dataType: 'text',
  }).done(successFunction);

/* parse */
  function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table>';
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
      if (singleRow === 0) {
        table += '<thead>';
        table += '<tr>';
      } else {
        table += '<tr>';
      }
      var rowCells = allRows[singleRow].split(',');
      for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        if (singleRow === 0) {
          table += '<th>';
          table += rowCells[rowCell];
          table += '</th>';
        } else {
          table += '<td>';
          table += rowCells[rowCell];
          table += '</td>';
        }
      }
      if (singleRow === 0) {
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
      } else {
        table += '</tr>';
      }
    } 
    table += '</tbody>';
    table += '</table>';
    $('body').append(table);
  }
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
  //  var data= this.response; //A string of the text data
   }
}         
}         
xhrDoc.send() //sending the request

/* Parse .csv file */
import { createReadStream, watch } from 'fs'; 
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

let saveFile = () => {
    	
    // Get the data from each element on the form.
    const comment = document.getElementById('comment');
   
    
    // This variable stores all the data.
    let data = 
        '\r Comment: ' + comment.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}
 

 

/* Implements a log that records invalid inputs and writes them to a text file  */
