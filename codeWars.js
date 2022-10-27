//---------------------------1--------------
//Write a function which converts the input string to uppercase.
// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
//
// let w = makeUpperCase('wwwww');
// console.log(w);

//-----------------2---------------------------------------------------------------------
//The goal is to create a function 'numberToPower(number, power)' that "raises"
// the number up to power (ie multiplies number by itself power times).

// function numberToPower(number, power) {
//     let result = 1;
//
//     for (let i = 1; i <= power; i++) {
//         result *= number;
//     }
//     return result;
// }
// console.log(numberToPower(10, 6));

//---------------3-------------------------------------------------------------------------------------------
//Write a function which calculates the average of the numbers in a given list.
// function findAverage(array) {
//     let result = 0;
//     for (const element of array) {
//         result = result + element;
//     }
//     return result/array.length;
// }
// console.log(findAverage([2,2,2]));

//-------------4-------------------------------------------------------------------------------------------
//Create a function called _if which takes 3 arguments:
// a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2

// function _if(bool, func1, func2) {
//    if(bool === true){
//        func1();
//    }else {
//        func2();
//    }
// }
// _if(true,function(){console.log("True")}, function(){console.log("false")})

//------------------------------------------------------------------------------------------------------------

function doubleInteger(i) {
    i = i * 2;
    return i;
}
console.log(doubleInteger(2));
