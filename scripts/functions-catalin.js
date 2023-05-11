 /* -------------------------------------------------------------------------- */
 /*                              even-true or false                             */
 /* -------------------------------------------------------------------------- */
 function isEven(number){
    if (number % 2 ==0){
    return true;
 }else{
    return false;
 }
}

/* -------------------------------------------------------------------------- */
/*                    2- suma a doua nr si inmultit cu 0.1                    */
/* -------------------------------------------------------------------------- */

function sum2Numbersmuliple(firstNumber, secondNumber){
    var sum = firstNumber + secondNumber;
    return sum * 0.1;
}

/* -------------------------------------------------------------------------- */
/*                     3-  calculare procentaj dintr-un numar                      */
/* -------------------------------------------------------------------------- */

function percentNumber(percent, number)
{
    return percent * number / 100;
}

/* -------------------------------------------------------------------------- */
/*                        4-functie comparare 3 numere                        */
/* -------------------------------------------------------------------------- */

function compare3Numbers(firstNumber, secondNumber, thirdNumber){
    if( firstNumber > secondNumber && firstNumber > thirdNumber){
        return firstNumber + ' este cel mai mare numar';
    }else if( secondNumber > firstNumber && secondNumber > thirdNumber){
        return secondNumber + ' este cel mai mare numar';
    }else {
        return thirdNumber + ' este cel mai mare numar';
    }
}

/* -------------------------------------------------------------------------- */
/*             5 - suma tuturor numerelor de la 0 pana la un numar            */
/* -------------------------------------------------------------------------- */

function sumUpToNumber(number){
    var sum = 0;
    for( var i = 0; i < number; i++){
        sum = sum + i;
    }
    return sum;
}

/* -------------------------------------------------------------------------- */
/*                                6-numar prim                                */
/* -------------------------------------------------------------------------- */

function numberPrim(number){
    if (number % 2 == 0 || number % 3 == 0 && number % number == 0){
        return false;
    }else {
        return true;
    }
}

/* -------------------------------------------------------------------------- */
/*                           7-comparare numar cu 0                           */
/* -------------------------------------------------------------------------- */

function compareToZero(number){
    if ( number >= 0){
        return 'Numarul ' + number + ' este pozitiv';
    }else {
        return 'Numarul ' + number + ' este negativ';
    }
}

/* -------------------------------------------------------------------------- */
/*                  8-toate numerele pare dintre doua numere                  */
/* -------------------------------------------------------------------------- */

function allisEvenBetween2Number(minNumber, maxNumber){
    if( minNumber < maxNumber){
    for (var i = minNumber+1;i < maxNumber; i++){
        if( i % 2 ==0){
            console.log(i);
        }
    }
}else if(minNumber > maxNumber){
    for( var i= maxNumber + 1; i < minNumber; i++){
        if( i % 2 ==0){
            console.log(i);
        }
}
}
    return;
}


