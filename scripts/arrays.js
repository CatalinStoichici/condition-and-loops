/* -------------------------------------------------------------------------- */
/*                              Exercitiul 1----                              */
/* -------------------------------------------------------------------------- */
/*console.log("Exercitiul 1");
var a = Number(prompt('valoarea lui a'));
var b = Number(prompt('valoarea lui b'));
var c = Number(prompt('valoarea lui c'));
function first(a, b, c){
   
    var array =[a, b, c];
    console.log(array);
    var sum = a + b + c;
    console.log(sum);
}
*/
/* -------------------------------------------------------------------------- */
/*                              Exercitiul 2----                              */
/* -------------------------------------------------------------------------- */
console.log("Exercitiul 2");
 var VerifyNumber = function(arrayinput){
    arrayinput = prompt("Type in a series of numbers, seoarated by ','");
    const arrayinputarr = arrayinput.split(",").map(Number);
    let sum=0;
    let negative = false;
    
    for ( let i = 0; i< arrayinputarr.length; i++){
        
        if( arrayinputarr[i] < 0){
            console.log("Exista un numar negativ");
            negative = true;
            break;
        }
        sum += arrayinputarr[i];
    }
   
    if(!negative) {
        
        console.log("Media numerelor este: ", sum / arrayinputarr.length);
    }
 }
 //VerifyNumber();

 /* -------------------------------------------------------------------------- */
 /*                              Exercitiul 3----                              */
 /* -------------------------------------------------------------------------- */
 const country = {
    RO : {
        nume: "Romania",
        capital: "Bucharest",
        
    },
    HU : {
        nume: "Hungary",
        capital: "Budapesta",
        
    },
    PL : {
        nume: "Polonia",
        capital: "Varsovia",
        
    },
    B : {
        nume: "Belgium",
        capital: "Bruxelles",
        
    },
 };

 const countryDetails = function(userInput){
    userInput = prompt(
        "Type in a coutry code (ex. RO, ES, UK, DE)"
      ).toUpperCase();
    
      console.log(
        `The country is ${country[userInput].nume} and its capital city is ${country[userInput].capital}.`
      );
 }
 //countryDetails();

 /* -------------------------------------------------------------------------- */
 /*                              Exercitiul 4----                              */
 /* -------------------------------------------------------------------------- */

 const casa = [
    {name: "Door", price: 200, qty: 7},
    {name: "Window", price: 50, qty: 7},
    {name: "Bed", price: 600, qty: 2},
    {name: "Sofa", price: 1000, qty: 1},
    {name: "TV", price: 400, qty: 3},
 ];

 const CasaCost = function(){
    var casaarr = [];
    var detailscasa = [];
    for(var i = 0; i<casa.length; i++){
        casaarr.push(casa[i].price * casa[i].qty);
        detailscasa.push(casa[i].name + "-> " + casaarr[i]);
    }
    console.log("This is the list of your house cost: ", detailscasa);
    console.log("Total cost for house is:", casaarr.reduce((acc,current) => acc + current));
 };
 CasaCost();

 /* -------------------------------------------------------------------------- */
 /*                              Exercitiul 5----                              */
 /* -------------------------------------------------------------------------- */
const studenti = [
    {name: "Catalin", age: 23, grades: [10, 8, 7, 6]}, 
    {name: "Catalin", age: 23, grades: [8, 9, 5, 6]}, 
    {name: "Catalin", age: 23, grades: [7, 10, 6, 8]}, 
];

studenti.forEach(function(Object) {
  var SumGrade = Object.grades.reduce((acc, current) => acc + current);
  var Avrgrades = SumGrade / Object.grades.length;
  console.log(Object.name, "avr grades:", Avrgrades);  
});