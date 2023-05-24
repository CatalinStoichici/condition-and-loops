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
/*                                Exercitiul 2                                */
/* -------------------------------------------------------------------------- */
