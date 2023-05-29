/* -------------------------------------------------------------------------- */
/*                                Exercitiul 1                                */
/* -------------------------------------------------------------------------- */
var ConcatenateWords = function( WordArr1, WordArr2){
    WordArr1 = prompt("Introdu primul cuvant");
    WordArr2 = prompt("Introdu al doilea cuvand");
    const concatenate= WordArr1 + WordArr2;
    console.log(concatenate);
    const lgt= concatenate.length;
    console.log("Lungimea sirului de caractere este:"+  lgt);
}

/* -------------------------------------------------------------------------- */
/*                                Exercitiul 2                                */
/* -------------------------------------------------------------------------- */

var ReturnArray = function splitString(inputword){
    inputword=prompt("Type word");
    return Array.from(inputword);
}

/* -------------------------------------------------------------------------- */
/*                                Exercitiul 3                                */
/* -------------------------------------------------------------------------- */

var LastToFirst = function(){
    inputword = prompt("Type word");
    var outpurword = "";
    for ( var i = inputword.length - 1; i >= 0; i--){
        outpurword= outpurword + inputword[i];
    }
   return outpurword;
}

/* -------------------------------------------------------------------------- */
/*                                Exercitiul 4                                */
/* -------------------------------------------------------------------------- */

const person = [
    {name: "Catalin", age: 21, hobby:["cycling", "travel", "swim"]},
    //{name: "Alexandru", age: 23, hobby:["books", "movies", "swim"]},
    //{name: "Andrei", age: 24, hobby:["swin", "hinking", "workout"]},   
];

console.log("Numele: " + person[0].name);
console.log("Varsta: " + person[0].age);
console.log("Hobby: " + person[0].hobby.join(','));

/* -------------------------------------------------------------------------- */
/*                                Exercitiul 5                                */
/* -------------------------------------------------------------------------- */

