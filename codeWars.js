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

//-----------5-------------------------------------------------------------------------------------------------
//Code as fast as you can! You need to double the integer and return it.
// function doubleInteger(i) {
//     i = i * 2;
//     return i;
// }
// console.log(doubleInteger(2));

//-----------6--------------------------------------------------------------------------------------------------
//You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let sum = 0;
//     for (const element of arr) {
//         if (element > 0){
//             sum = sum + element;
//         }
//     }
//     return sum;
// }
// console.log(positiveSum([1,-4,7,12]));

//-------------7------------------------------------------------------------------------------------------------
//Return an array, where the first element is the count of positives numbers and the second element
// is sum of negative numbers.0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     let arr = [];
//     let countPositive = 0;
//     let sumNegative = 0;
//     for (const element of input) {
//         if (element > 0) {
//             countPositive = countPositive + 1;
//         }
//         if (element < 0) {
//             sumNegative = sumNegative + element;
//         }
//     }
//     arr.push(countPositive, sumNegative);
//     return arr;
// }
//
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

//-------------8-------------------------------------------------------------------------------------
//Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//
//    return s.repeat(n);
// }
// console.log(repeatStr(10, 'Hello'));

//-----------------------------------------------------------------------------------------------------
// Повернути усі ключі з обєкта

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
//
// Object.keys(object1).map(w=> console.log(w));

//------------------------------------------------------------------------------------------------------
// Повернути усі значення з обєкта

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
//
// Object.values(object1).map(w=> console.log(w));

//---------------------------------------------------------------------------------------------------

// Числа Фібоначчі - це числова послідовність, в якій кожне число, починаючи з третього, дорівнює сумі
// двох попередніх чисел. Перші два числа в послідовності завжди дорівнюють 1. Тобто, числа Фібоначчі
// починаються з 1, 1, 2, 3, 5, 8, 13, і так далі.Формально, n-те число Фібоначчі позначається як F(n) і обчислюється
// наступним чином: F(1) = 1, F(2) = 1, і F(n) = F(n-1) + F(n-2) для n > 2.
// Напишіть програмну функцію, яка приймає ціле число n як вхідний аргумент і повертає n-те число Фібоначчі.
//     Результат обчислення повинен бути виведений або повернутий користувачу.Реалізація може використовувати алгоритм
// за допомогою рекурсії, ітерації або будь-якого іншого підходу.

// const getNumber=n=>{
//     if (!n | typeof n !=="number"){
//         return "enter valid number"
//     }
//
//     const array=[1,1];
//
//     for (let i = 3; i <= n; i++){
//         const number=array[i-3]+array[i-2];
//         array.push(number);
//     }
//
//     return array[n-1];
// }
// console.log(getNumber(300));
//-----------------------------------------------------------------------------------------------------------
// Вам надається масив об'єктів, що представляють співробітників з їхніми іменами та зарплатами.
// const coworkers = [{name: 'Andy', salary: 750}, {name: 'Bernard', salary: 500}, {name: 'Pam', salary: 900}]
// Реалізуйте методи що приймають масив такого типу і реалізують:
//     визначення загальних витрат на зарплати для компанії на основі даних про співробітників.
//     визначення співробітника(ів) з найвищою зарплатою.
//     визначення середньої зарплати всіх співробітників.
//     визначити всіх працівників, які заробляють більше заданого параметром рівня зарплати.

// const coworkers = [
//     { name: 'Andy', salary: 750 },
//     { name: 'Bernard', salary: 500 },
//     { name: 'Pam', salary: 900 }
// ];
//
// const company = {
//     calculateTotalSalary: function () {
//         return coworkers.reduce((total, coworker) => total + coworker.salary, 0);
//     },
//
//     findHighestPaid: function () {
//         const highestPaid = coworkers.reduce((max, coworker) =>
//             coworker.salary > max.salary ? coworker : max
//         );
//         return highestPaid;
//     },
//
//     calculateAverageSalary: function () {
//         const totalSalary = this.calculateTotalSalary();
//         return totalSalary / coworkers.length;
//     },
//
//     findEmployeesAboveSalary: function (thresholdSalary) {
//         return coworkers.filter(coworker => coworker.salary > thresholdSalary);
//     }
// };
//
// console.log("Загальні витрати на зарплати:", company.calculateTotalSalary());
// console.log("Співробітник з найвищою зарплатою:", company.findHighestPaid());
// console.log("Середня зарплата всіх співробітників:", company.calculateAverageSalary());
// console.log("Співробітники з зарплатою більше 600:", company.findEmployeesAboveSalary(600));

//----------------------------------------------------------------------------------------------------
// Необхідно реалізувати функцію revertCase, яка приймає в якості аргументу стрічку, а повертає нову стрічку в якій
// кожна літера змінила регістр.
//     Приклад:
// revertCase('Hello World'); // hELLO wORLD


// function func(string = '') {
//     let str ='';
//     for (const element of string) {
//         if (element === element.toUpperCase()){
//             str += element.toLowerCase()
//         }
//         if (element === element.toLowerCase()){
//             str += element.toUpperCase()
//         }
//     }
//     return str;
// }
//
// console.log(func('qqqq'));

///-------------------------------------------------------------------------------------------------------------











